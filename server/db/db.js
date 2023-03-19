const mongoose = require('mongoose');

function connectDb() {
	mongoose.connect('mongodb+srv://kumawatkct:Akumawat2@movie-rating-cluster.6zyudsg.mongodb.net/test')
}

module.exports = { connectDb };