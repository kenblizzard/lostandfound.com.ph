var usersDb = require('../db_scripts/usersDb');



var users = {
    getUser: function (id, sendDataCallback, res) {
        return usersDb.findUser(id, sendDataCallback, res);
    }
}

module.exports = users;