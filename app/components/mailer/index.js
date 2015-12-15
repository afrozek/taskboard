var nodemailer = require('nodemailer');

module.exports = mailerRoutes;

function mailerRoutes (app, express) {
	var mailerApi = express.Router();

	mailerApi.post('/', function (req, res) {
		console.log(req.body);

		var transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: 'nodemailer2@gmail.com',
				pass: 'nodemailer?'
			}
		});

		var emailSubject = 'Taskboard Admin: Invitation to join ' + req.body.board.title;

		var emailText = '<h1>Hello!</h1>' + req.body.board.owner + ' has invited you to join his board at taskboard! Click here: <a href="http://localhost:8080/">To sign up</a>';

		var mailOptions = {
			to: req.body.newUser,
			subject: emailSubject,
			html: emailText
		};

		transporter.sendMail(mailOptions, function (err, info) {
			if (err)
				return console.log(err);

			console.log(info);
		});
	});

	return mailerApi;
}





var mailer = {
	sendEmail: function (recipient) {
		var transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: 'nodemailer2@gmail.com',
				pass: 'nodemailer?'
			}
		});

		var mailOptions = {
			to: recipient,
			subject: 'Nodemailer test',
			text: 'Hey bro' 
		};

		transporter.sendMail(mailOptions, function (err, info) {
			if (err)
				return console.log(err);

			console.log(info);
		});
	}
};