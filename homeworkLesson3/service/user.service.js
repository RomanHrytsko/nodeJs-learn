const fs = require('fs');
const { promisify } = require('util');
const path = require('path');
const usersDB = require('../dataBase/users.json');

const dirPath = 'C:\\Users\\Роман\\Desktop\\Frontend\\MyWorks\\nodeJs\\homeworkLesson3\\dataBase';
const writeFile = promisify(fs.writeFile);

module.exports = {
    findUser: () => usersDB,

    getOneUser: (userId) => usersDB[userId],
    createUser: (userObject) => {
        usersDB.push(userObject);
        writeFile(path.join(dirPath, 'users.json'), JSON.stringify(usersDB)).then();
    },
    deleteUser: (userId) => {
        usersDB.splice(userId, 1);
        writeFile(path.join(dirPath, 'users.json'), JSON.stringify(usersDB))
            .then();
    }
};
