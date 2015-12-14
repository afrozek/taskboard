var configSettings = {
	db: 'mongodb://admin:root@ds027345.mongolab.com:27345/taskboard',
	port: process.env.PORT || 8080,
	secret: 'iheartJWTsAndCats'
};

module.exports = configSettings;