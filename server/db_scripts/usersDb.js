var MongoClient = require('mongodb').MongoClient,
	assert = require('assert'),
	_ = require('lodash'),
	format = require('util').format,
	ObjectId = require('mongodb').ObjectID,
	config = require('../../config/config'),
	moment = require('moment');

var url = config.dburl;

var usersDb = {
    findUser: function (username, sendDataCallback, res) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                console.log(err);
            }

            var collection = db.collection('users');
            collection.findOne({ username: username }, function (err, data) {
                if (err) {
                    console.log(err);
                }
                db.close();

                sendDataCallback(res, data);
            });            
        });

    }
}

module.exports = usersDb;