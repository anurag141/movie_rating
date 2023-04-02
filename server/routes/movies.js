var express = require('express');
const Movie = require('../models/Movie');
var router = express.Router();

/* GET users listing. */
async function movieRequestHandler(req, res, next) { 
    const movies = await Movie.find();
    console.log("movies", movies);
	res.send(movies);
}
router.get('/', movieRequestHandler);

module.exports = router;
