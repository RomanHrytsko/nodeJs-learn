const router = require('express').Router();

const registrationController = require('../contorller/registaration.controller');
// const registrationMiddleware = require('../middleware/registration.middleware');

// router.post('/', registrationMiddleware.isRegistrationValid, registrationController.registerNewUser);

router.post('/', registrationController.registerNewUser);

module.exports = router;
