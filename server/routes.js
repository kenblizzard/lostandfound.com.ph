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

    app.get('/api/post/:id', function (req, res) {      
        res.send(posts.getPost(req.params.id));
    });

    app.get('/api/user/:id', function (req, res) {        
        users.getUser(req.params.id, sendDataCallback, res);
    });

    app.get('/api/posts', function (req, res) {
        posts.getPosts(sendDataCallback, res);
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function (req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};