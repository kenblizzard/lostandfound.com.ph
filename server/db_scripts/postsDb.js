var MongoClient = require('mongodb').MongoClient,
	assert = require('assert'),
	_ = require('lodash'),
	format = require('util').format,
	ObjectId = require('mongodb').ObjectID,
	config = require('../../config/config'),
	moment = require('moment');

var url = config.dburl;

var postsDb = {
    getPosts: function (regExp, sendDataCallback, res) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                console.log('postsDb - getPosts: Error connecting to MongoDb: ' + err);
            }

            var collection = db.collection('users');
            collection.aggregate([
                {
                    $unwind: "$posts"
                },
                {
                    $match: {
                        $or: [
                            { "posts.title": { $regex: regExp } },
                            { "posts.description": { $regex: regExp } }
                        ]
                    }
                }
            ]).toArray(function (err, data) {
                if (err) {
                    console.log("Error: ", err);
                }

                db.close();
                sendDataCallback(res, data);
            });
        });

    }
}

module.exports = postsDb;