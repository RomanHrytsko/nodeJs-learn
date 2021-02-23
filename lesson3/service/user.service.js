const DB = require('../dataBase/users')

module.exports = {
    findUser: () => {
        return DB;
    },
    findUserById: (userId) => {
        return DB[userId];
    },
    createUser: (userobject) => {
        DB.push(userobject)
    }

}
