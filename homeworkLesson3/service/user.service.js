const usersDB = require('../dataBase/users.json')


const fs = require('fs')
const {promisify} = require('util')
const path = require('path')

const dirPath ='C:\\Users\\Роман\\Desktop\\Frontend\\MyWorks\\nodeJs\\homeworkLesson3\\dataBase';
const writeFile = promisify(fs.writeFile)


module.exports = {
    findUser: () => {

        return usersDB

    },

    getOneUser: (userId) => {

        return usersDB[userId]

    },
    createUser: (userObject) => {

        usersDB.push(userObject)
        writeFile(path.join(dirPath, 'users.json'), JSON.stringify(usersDB)).then()


    }
}
