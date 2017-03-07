'use strict';

module.exports = {
	test: {
		NODE_ENV: 'test',
		HOBOBAR_HOST: '127.0.0.1',
		HOBOBAR_PORT: 3001,
		HOBOBAR_DB_HOST: 'localhost',
		HOBOBAR_DB_PORT: 3306,
		HOBOBAR_DB_USER: 'hobobar_test',
		HOBOBAR_DB_PASS: 'password',
		HOBOBAR_DB_NAME: 'hobobar_test',
		HOBOBAR_UPLOADS_DIR: __dirname + '/../test/uploads'
	}
};
