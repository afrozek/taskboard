module.exports = todoListRoutes;

var dbInterface = require('../dbHelpers/dbInterface.js');
var passportJwt = require('../auth/jwtStrategy.js')();

function todoListRoutes (app, express) {
	var todoListApi = express.Router();

	todoListApi.use(passportJwt, function (req, res, next) {
		next();
	});

	todoListApi.route('/')
		.get(function (req, res) {
			dbInterface.getFromDb('Todo')
				.exec(function (err, todos) {
					if (err)
						return res.send(err);

					res.json(todos);
				});
		})
		.post(function (req, res) {
			req.body.owner = req.user.email;

			dbInterface.postToDb('Todo', req.body)
				.addBack(function (err) {
					if (err)
						return res.send(err);

					res.json({
						message: 'Todo successfully saved'
					})
				});
		});

	todoListApi.route('/:_id')
		.get(function (req, res) {
			dbInterface.getFromDb('Todo', { _id: req.params._id }, null, true)
				.exec(function (err, Todo) {
					if (err)
						return res.send(err);

					res.json(Todo);
				});
		})
		.put(function (req, res) {
			dbInterface.getFromDb('Todo', { _id: req.params._id }, null, true)
				.exec(function (err, Todo) {
					if (err)
						return res.send(err);

					dbInterface.putToDb(req.body, Todo)
						.addBack(function (err) {
							if (err)
								return res.send(err);

							res.json({
								message: 'Todo successfully updated'
							})
						});
				});
		})
		.delete(function (req, res) {
			dbInterface.getFromDb('Todo', { _id: req.params._id }, null, true)
				.exec(function (err, Todo) {
					if (err)
						return res.send(err);

					dbInterface.deleteFromDb('Todo')
						.exec(function (err) {
							if (err)
								return res.send(err);

							res.json({
								message: 'Todo successfully deleted'
							});
						})
				});
		});

	//After configuring router, make sure to return it
	return todoListApi;
}