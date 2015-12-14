var nodemailer = require('nodemailer');

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

module.exports = mailer;