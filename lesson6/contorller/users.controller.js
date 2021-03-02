const userService = require('../service/user.service');
const codeStatus = require('../constants/codes.status.enum');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.findUser();
            res.json(users);
        } catch (e) {
            res.service(codeStatus.BAD_REQUEST).json(e.message);
        }
    },
    getSingleUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const user = await userService.getOneUser(userId);
            res.json(user);
        } catch (e) {
            res.service(codeStatus.NOT_FOUND).json(e.message);
        }
    },
    deleteOneUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const deletedUser = await userService.deleteUser(userId);
            res.json(deletedUser);
        } catch (e) {
            res.json(codeStatus.BAD_REQUEST).json(e.message);
        }
    }
};
