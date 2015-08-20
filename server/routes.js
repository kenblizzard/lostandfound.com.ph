var postsModel = require('./models/postsModel');
var usersModel = require('./models/usersModel');

module.exports = function (app) {

    var sendDataCallback = function(res, data) {
        console.log("sendDataCallback data: ", data);
        res.send(JSON.stringify(data));
    }
    
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    app.get('/api/post/:postId', function (req, res) {      
        postsModel.getPost(req.params.postId, sendDataCallback, res);
    });

    app.get('/api/user/:id', function (req, res) {        
        usersModel.getUser(req.params.id, sendDataCallback, res);
    });

    app.get('/api/posts/:query', function (req, res) {
        postsModel.getPosts(req.params.query, sendDataCallback, res);
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function (req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};