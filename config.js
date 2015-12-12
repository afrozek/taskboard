var configSettings = {
	db: 'mongodb://localhost/taskboard',
	port: process.env.PORT || 8080,
	secret: 'iheartJWTsAndCats'
};

module.exports = configSettings;