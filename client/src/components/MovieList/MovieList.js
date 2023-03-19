import React, { useState, useEffect } from 'react'
import Movie from '../Movie/Movie';
import axios from 'axios';

async function fetchMovie() {
	const result = await axios.get("http://localhost:9000/movies");
	return result.data;
}

function showMovie(movie) {
	return (
		<Movie movie={ movie } /> 
	)
}

function MovieList() {
	const [movies, setMovies] = useState([]);
	async function postRenderhandler(){
		const moviesFromServer = await fetchMovie();
		setMovies(moviesFromServer);
	}
	function postRenderhandlerNonAsync() {
		postRenderhandler();
	}

	useEffect(postRenderhandlerNonAsync, []);

	return (
		<div>
			{movies.map(showMovie)}
		</div>
	)
}

export default MovieList;