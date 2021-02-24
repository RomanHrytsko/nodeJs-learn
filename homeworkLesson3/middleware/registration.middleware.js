const codeStatus = require('../constants/codes.status.enum')
const errorMessage = require('../error/error.message')

const usersDB = require('../dataBase/users.json')

module.exports = {

    isRegistrationValid: (req, res, next) => {
        try {

            const {name, age, gender, email, password, preferL = "ua"} = req.body


            if (!name || !age || !gender || !email || !password) {
                throw new Error(errorMessage.SOME_FIELD_IS_EMPTY[preferL])
            }


            if (!Number.isInteger(age) || age <= 0 || Number.isNaN(age)) {
                throw new Error(errorMessage.VALUE_MUST_BE_INTEGER_NUMBER[preferL])
            }

            usersDB.forEach(value => {
                if (value.email === email) {
                    throw new Error(errorMessage.EMAIL_ALREADY_EXIST[preferL])
                }
            })

            next();


        } catch (e) {
            res.status(codeStatus.BAD_REQUEST).json(e.message)
        }
    }
}

