'use strict';

var config = module.exports = {

	host: process.env.HOBOBAR_HOST || 'localhost',
	port: parseInt(process.env.HOBOBAR_PORT || 3000),

	db: {
		host: process.env.HOBOBAR_DB_HOST || 'localhost',
		port: parseInt(process.env.HOBOBAR_DB_PORT || 3306),
		user: process.env.HOBOBAR_DB_USER || 'hobobar_local',
		password: process.env.HOBOBAR_DB_PASS || 'password',
		database: process.env.HOBOBAR_DB_NAME || 'hobobar_local',
		charset: 'utf8mb4'
	},

	uploadsDir: process.env.HOBOBAR_UPLOADS_DIR || __dirname + '/uploads'
};

if (!config.uploadsDir) {
	throw Error('Missing required configuration: "uploadsDir".');
}
