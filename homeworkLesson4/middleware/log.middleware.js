const codeStatus = require('../constants/codes.status.enum');
const errorMessage = require('../error/error.message');

const usersDB = require('../dataBase/users.json');

module.exports = {

    isUserRegistered: (req, res, next) => {
        try {
            const { email, password, preferL = 'ua' } = req.body;
            // (не знаю як пофіксити проблему з стрілочною функцією)
            // eslint-disable-next-line array-callback-return
            usersDB.find((value) => {
                if (value.email !== email && value.password === password) {
                    throw new Error(errorMessage.WRONG_EMAIL_OR_PASSWORD[preferL]);
                } else if (value.email === email && value.password !== password) {
                    throw new Error(errorMessage.WRONG_EMAIL_OR_PASSWORD[preferL]);
                }
                if (!email || !password) {
                    throw new Error(errorMessage.SOME_FIELD_IS_EMPTY[preferL]);
                }
            });
            next();
        } catch (e) {
            res.status(codeStatus.BAD_REQUEST).json(e.message);
        }
    }

};
