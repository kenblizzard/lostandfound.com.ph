var postsDB = require('../db_scripts/postsDb');

var posts = {
    getPost: function (id) {
        var post;
        switch (parseInt( id)) {
            case 1:
                post = 'hello world';
                break;
            case 2:
                post = 'hi test';
                break;
            case 3:
                post = 'hi kenneth';
                break;
        }      
        return post;
    },

    getPosts: function (query, sendDataCallback, res) {
        var regExp = new RegExp(query, "i");
        console.log("postsModel getPosts regExp: ", regExp);
        postsDB.getPosts(regExp, sendDataCallback, res);        
    }
}

module.exports = posts;