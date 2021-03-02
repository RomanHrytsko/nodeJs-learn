const { codeStatusEnum } = require('../constants');
const { passwordHasher } = require('../helpres');
const registrationService = require('../service/registration.service');

// const User = require('../dataBase/models/Users');

module.exports = {
    registerNewUser: async (req, res) => {
        try {
            const { password } = req.body;
            const hashPassword = await passwordHasher.hash(password);

            await registrationService.registerUser({ ...req.body, password: hashPassword });
            res.status(codeStatusEnum.CREATED).json('USER IS CREATED');
        } catch (e) {
            res.json(e.message);
        }
    }
};
