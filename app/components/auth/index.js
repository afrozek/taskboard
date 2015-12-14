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

				//if found user with email
				if (user) {
					if (!user.comparePassword(req.body.password)) {
						return res.status(403).send({
							message: 'The email and password you entered don\'t match.'
						});
					} else {
						var payload = {	email: user.email };
						var secret = require('../../../config.js').secret;
						var options = { expiresIn: 86400 };

						var token = jwt.sign(payload, secret, options);

						res.json(
							{
								message: "Authenticated! Keep this token in a safe place",
								token: token 
							});
					}
				}
				else{
					//if email does note exist
					return res.status(403).send({
							message: 'A user with that email does not exist.'
						});
				}
			});
	});

	return authApi;
}