const router = require('express').Router();

const logController = require('../contorller/log.controller');
const logMiddleware = require('../middleware/log.middleware');

router.post('/', logMiddleware.isUserRegistered, logController.logInUser);

module.exports = router;
