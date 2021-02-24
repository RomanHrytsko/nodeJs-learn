const userService = require('../service/user.service')
const codeStatus = require('../constants/codes.status.enum')

module.exports = {
    getAllUsers: (req, res) => {
        try {
            const users = userService.findUser()

            res.json(users)
        } catch (e) {
            res.service(codeStatus.BAD_REQUEST).json(e.message)
        }
    },
    getSingleUser: (req, res) => {
        try {
            const {userId} = req.params
            const user = userService.getOneUser(userId)
            res.json(user)

        } catch (e) {
            res.service(codeStatus.NOT_FOUND).json(e.message)
        }
    },

}
