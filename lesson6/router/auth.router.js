const router = require('express').Router();

const User = require('../dataBase/models/Users');
const { passwordHasher } = require('../helpres');

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('No USER');
    }

    await passwordHasher.compare(password, user.password);
    res.json('AUTH IS SUCCESS');
});
module.exports = router;
