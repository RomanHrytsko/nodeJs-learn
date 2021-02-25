const router = require('express').Router();

const userController = require('../contorller/users.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);
router.get('/:userId', userMiddleware.checkIsValid, userController.getSingleUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
