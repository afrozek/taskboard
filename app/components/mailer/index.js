var nodemailer = require('nodemailer');

var mailer = {
	sendEmail: function () {
		var transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: 'ybzadough@gmail.com',
				pass: 'intern_ship'
			}
		});

		var mailOptions = {
			to: 'ybzadough@gmail.com',
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