const codeStatus = require('../constants/codes.status.enum');
const registrationService = require('../service/registration.service');

// const User = require('../dataBase/models/Users');

module.exports = {
    registerNewUser: async (req, res) => {
        try {
            await registrationService.registerUser(req.body);
            res.status(codeStatus.CREATED).json('USER IS CREATED');
        } catch (e) {
            res.status(codeStatus.BAD_REQUEST).json(e.message);
        }
    }
};
