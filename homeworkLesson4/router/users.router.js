const router = require('express').Router();

const userController = require('../contorller/users.controller');
// const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);
// router.get('/:userId', userMiddleware.checkIsValid, userController.getSingleUser);
router.get('/:userId', userController.getSingleUser);
router.delete('/:userId', userController.deleteOneUser);

module.exports = router;
