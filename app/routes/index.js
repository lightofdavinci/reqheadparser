'use strict';

module.exports = function (app) {

	app.get('/', function (req, res) {
		res.send({'ipaddress':req.headers['x-forwarded-for'] || req.connection.remoteAddress,
				'language': req.headers['accept-language'].split(",")[0],
				'software': req.headers['user-agent'].split("(")[1].split(")")[0]});
			});
};
