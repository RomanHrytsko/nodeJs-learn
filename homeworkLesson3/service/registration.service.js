const userDB = require('../dataBase/users.json');

const fs = require('fs')
const {promisify} = require('util')
const path = require('path')

const dirPath ='C:\\Users\\Роман\\Desktop\\Frontend\\MyWorks\\nodeJs\\homeworkLesson3\\dataBase';
const writeFile = promisify(fs.writeFile)

module.exports ={
    registerUser: (userObject) => {
        userDB.push(userObject)
        writeFile(path.join(dirPath, 'users.json'), JSON.stringify(userDB)).then()
    }
}
