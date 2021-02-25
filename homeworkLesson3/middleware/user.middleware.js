const usersDB = require('../dataBase/users.json');

const codeStatus = require('../constants/codes.status.enum');
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
    }

};
