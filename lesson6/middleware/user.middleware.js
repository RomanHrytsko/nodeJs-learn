const usersDB = require('../dataBase/users.json');

const { codeStatus } = require('../constants');
const { userValidators } = require('../validators');
const errorMessage = require('../error/error.message');

module.exports = {

    checkIsValid: (req, res, next) => {
        const userId = +req.params.userId;
        try {
            if (userId < 0 || userId >= usersDB.length || !Number.isInteger(userId) || Number.isNaN(userId)) {
                throw new Error(errorMessage.NOT_VALID_ID.ua);
            }
            next();
        } catch (e) {
            res.status(codeStatus.BAD_REQUEST).json(e.message);
        }
    },
    isUserValid: (req, res, next) => {
        try {
            const { error } = userValidators.createUserValidator.validate(req.body);
            if (error) {
                console.log(error.details);
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(codeStatus.BAD_REQUEST).json(e.message);
        }
    }

};
