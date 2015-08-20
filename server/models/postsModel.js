var postsDB = require('../db_scripts/postsDb');

var posts = {
    getPost: function (id, sendDataCallback, res) {        
        postsDB.getPost(id, sendDataCallback, res);
    },

    getPosts: function (query, sendDataCallback, res) {
        var regExp = new RegExp(query, "i");
        console.log("postsModel getPosts regExp: ", regExp);
        postsDB.getPosts(regExp, sendDataCallback, res);        
    }
}

module.exports = posts;