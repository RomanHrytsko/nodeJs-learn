const codeStatus = require('../constants/codes.status.enum');
const registrationService = require('../service/registration.service');

module.exports = {
    registerNewUser: (req, res) => {
        try {
            registrationService.registerUser(req.body);
            res.status(codeStatus.CREATED).json('User is Created');
        } catch (e) {
            res.status(codeStatus.BAD_REQUEST).json(e.message);
        }
    }
};
