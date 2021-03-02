const router = require('express').Router();

const userRouter = require('./users.router');
const registrationRouter = require('./registr.router');
const logRouter = require('./log.router');
const authRouter = require('./auth.router');

router.use('/auth', authRouter);
router.use('/registration', registrationRouter);
router.use('/users', userRouter);
router.use('/log', logRouter);

module.exports = router;
