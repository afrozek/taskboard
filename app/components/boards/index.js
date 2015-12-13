module.exports = todoListRoutes;

var dbInterface = require('../dbHelpers/dbInterface.js');
var passportJwt = require('../auth/jwtStrategy.js')();

function todoListRoutes (app, express) {
	var boardsApi = express.Router();

	boardsApi.use(passportJwt, function (req, res, next) {
		next();
	});

	boardsApi.route('/')
		.get(function (req, res) {
			dbInterface.getFromDb('Board')
				.exec(function (err, boards) {
					if (err)
						return res.send(err);

					res.json(boards);
				});
		})
		.post(function (req, res) {
			var owner = req.body.owner,
				title = req.body.title,
				sections = req.body.sections;

			dbInterface.getFromDb('Board', { owner: owner, title: title })
				.exec(function (err, boards) {
					if (err)
						return res.send(err);

					if (boards.length) {
						return res.json({
							success: false,
							message: 'You cannot have two boards with the same title'
						});
					} else {
						dbInterface.postToDb('Board', req.body)
							.addBack(function (err) {
								if (err)
									return res.send(err);

								res.json({
									success: true,
									message: 'Board successfully created'
								})
							});
					}
							
				});
		});

	boardsApi.route('/:_id')
		.get(function (req, res) {
			dbInterface.getFromDb('Board', { _id: req.params._id }, null, true)
				.exec(function (err, Todo) {
					if (err)
						return res.send(err);

					res.json(Todo);
				});
		})
		.put(function (req, res) {
			dbInterface.getFromDb('Board', { _id: req.params._id }, null, true)
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
			dbInterface.getFromDb('Board', { _id: req.params._id }, null, true)
				.exec(function (err, Todo) {
					if (err)
						return res.send(err);

					dbInterface.deleteFromDb('Board')
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
	return boardsApi;
}