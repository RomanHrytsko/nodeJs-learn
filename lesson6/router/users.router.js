const router = require('express').Router();

const userController = require('../contorller/users.controller');
const { usersMiddleware } = require('../middleware');

router.get('/', userController.getAllUsers);
router.get('/:userId', usersMiddleware.checkIsValid, userController.getSingleUser);
router.delete('/:userId', userController.deleteOneUser);

module.exports = router;
