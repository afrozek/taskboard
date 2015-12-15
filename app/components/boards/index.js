module.exports = BoardRoutes;

var dbInterface = require('../dbHelpers/dbInterface.js');
var passportJwt = require('../auth/jwtStrategy.js')();

function BoardRoutes (app, express) {
	var boardsApi = express.Router();

	// boardsApi.use(passportJwt, function (req, res, next) {
	// 	next();
	// });

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

			dbInterface.getFromDb('Board', { owner: req.body.owner, title: req.body.title })
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
								if (err) {
									return res.send(err);
								}

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
				.exec(function (err, board) {
					if (err)
						return res.send(err);

					res.json(board);
				});
		})
		.put(function (req, res) {
			dbInterface.getFromDb('Board', { _id: req.params._id }, null, true)
				.exec(function (err, board) {
					if (err)
						return res.send(err);

					dbInterface.putToDb(req.body, board)
						.addBack(function (err) {
							if (err)
								return res.send(err);

							res.json({
								message: 'Board successfully updated'
							})
						});
				});
		})
		.delete(function (req, res) {
			dbInterface.getFromDb('Board', { _id: req.params._id }, null, true)
				.exec(function (err, board) {
					if (err)
						return res.send(err);

					dbInterface.deleteFromDb('Board')
						.exec(function (err) {
							if (err)
								return res.send(err);

							res.json({
								message: 'Board successfully deleted'
							});
						})
				});
		});


	boardsApi.post('/byEmail', function (req,res) {

		dbInterface.getFromDb('Board', { owner: req.body.owner }, null, false)
				.exec(function (err, boards) {
					if (err)
						return res.send(err);

					res.json(boards);
				});

	})

	//After configuring router, make sure to return it
	return boardsApi;
}