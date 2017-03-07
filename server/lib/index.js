'use strict';

module.exports = {

	getRandomCharacters: function(length, charset) {

		var str = '';

		charset = charset || 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

		while (str.length < length) {
			str += charset[Math.floor(Math.random() * charset.length)];
		}

		return str;
	}
};
