const mongoose = require('mongoose');

const columns = {
	email: {type: String, required: true, unique: true},
	password: { type: String, required: true },
	name: { type: String, required: true },
}

const schema = new mongoose.Schema(columns);
const userModel = mongoose.model("user", schema);



module.exports = userModel;