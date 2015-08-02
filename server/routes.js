var posts = require('./models/postsModel');
var users = require('./models/usersModel');

module.exports = function (app) {

    var sendDataCallback = function(res, data) {
        console.log(data);
        res.send(JSON.stringify(data));
    }


    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/post/:id', function (req, res) {
        // use mongoose to get all nerds in the database                       
        res.send(posts.getPost(req.params.id));
    });

    app.get('/api/user/:id', function (req, res) {
        // use mongoose to get all nerds in the database                       
        users.getUser(req.params.id, sendDataCallback, res);
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function (req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};