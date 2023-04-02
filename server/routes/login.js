var express = require('express');
var router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/* GET users listing. */
async function loginRequestHandler(req, res, next) {
    const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		return res.status(401).json({ message: 'Invalid email or password' });
	}
	const encryptedPassword = user.password;
	bcrypt.compare(password, encryptedPassword, (err, result) => {
		if (err) {
			return res.status(401).json({ message: 'Invalid email or password' });
		}
		if (result) {
			const token = jwt.sign({ userId : user._id }, "bla");
			return res.status(200).send({ token });
		}
	})
}
router.post('/', loginRequestHandler);

module.exports = router;
