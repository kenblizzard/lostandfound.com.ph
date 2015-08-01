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
    }
}

module.exports = posts;