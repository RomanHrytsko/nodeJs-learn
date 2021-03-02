const User = require('../dataBase/models/Users');

module.exports = {
    findUser: () => User.find(),

    getOneUser: (userId) => User.findById(userId),
    createUser: (userObject) => User.create(userObject),
    deleteUser: (userId) => User.deleteOne(userId)
};
