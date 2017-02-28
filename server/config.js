'use strict';

module.exports = {

	port: 3000,

	db: {
		host: process.env.HOBOBAR_DB_HOST || '127.0.0.1',
		port: parseInt(process.env.HOBOBAR_DB_PORT || 3306),
		user: process.env.HOBOBAR_DB_USER || 'hobobar_local',
		password: process.env.HOBOBAR_DB_PASS || 'password',
		database: process.env.HOBOBAR_DB_NAME || 'hobobar_local',
		charset: 'utf8mb4'
	}
};
