const codeStatus = require('../constants/codes.status.enum')

const userService = require('../service/user.service')

module.exports = {
    logInUser:(req,res) =>{
        try{
            const {email, password} = req.body
            const users = userService.findUser()

            users.forEach( value => {
                if(value.email === email && value.password === password){

                res.json(value)
                }
            })

        } catch (e) {

            res.status(codeStatus.BAD_REQUEST).json(e.message)
        }
    }
}
