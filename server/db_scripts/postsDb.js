var MongoClient = require('mongodb').MongoClient,
	assert = require('assert'),
	_ = require('lodash'),
	format = require('util').format,
	ObjectId = require('mongodb').ObjectID,
	config = require('../../config/config'),
	moment = require('moment');

var url = config.dburl;

var usersDb = {
    findUser: function (userId) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                console.error('personDb - getPerson: Error connecting to MongoDb: ' + JSON.stringify(err));
                callback(err, null);
            }

            var collection = db.collection('persons');
            collection.findOne({ username: message.username }, function (err, doc) {
                db.close();
                callback(err, doc);
            });
        });

    }
}

module.export = usersDb;