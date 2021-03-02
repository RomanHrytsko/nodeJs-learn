const User = require('../dataBase/models/Users');

module.exports = {
    registerUser: (userObject) => User.create(userObject)
};
