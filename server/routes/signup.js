var express = require('express');
var router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/* GET users listing. */
async function signupRequestHandler(req, res, next) {
	const { email, password, name } = req.body;
	if (!email || !password || !name) {
		return res.status(400).json({ message: 'All fields are required' });
	}
	const userExits = await User.findOne({ email });
	if (userExits) {
		return res.status(409).json({ message: 'Email already exists' });
	}
	const encryptedPassword = await bcrypt.hash(password, 10);
	const user = new User({ email, password: encryptedPassword, name });
	await user.save();

    const token = jwt.sign({ userId: user._id }, "bla");
	res.send(user);
}
router.post('/', signupRequestHandler);

module.exports = router;
