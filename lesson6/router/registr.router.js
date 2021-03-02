const router = require('express').Router();

const { usersMiddleware } = require('../middleware');

const registrationController = require('../contorller/registaration.controller');
// const registrationMiddleware = require('../middleware/registration.middleware');

router.post('/', usersMiddleware.isUserValid, registrationController.registerNewUser);

router.post('/', registrationController.registerNewUser);

module.exports = router;
