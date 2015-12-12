module.exports = authRoutes;

var dbInterface = require('../dbHelpers/dbInterface.js');
var jwt = require('jsonwebtoken');

function authRoutes (app, express) {
	var authApi = express.Router();

	authApi.post('/', function (req, res) {
		dbInterface.getFromDb('User', { email: req.body.email }, '+password', true)
			.exec(function (err, user) {
				if (err)
					return res.send(err);

				if (user) {
					if (!user.comparePassword(req.body.password)) {
						return res.status(403).send({
							message: 'The email and password you entered don\'t match.'
						});
					} else {
						var payload = {	email: user.email };
						var secret = require('../../../config.js').secret;
						var options = { expiresInMinutes: 1440 };

						var token = jwt.sign(payload, secret, options);

						res.json({ token: token });
					}
				}
			});
	});

	return authApi;
}