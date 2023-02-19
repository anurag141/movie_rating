import React from 'react'
import Movie from '../Movie/Movie';
import axios from 'axios';

async function fetchMovie() {
    const result = await axios.get("http://localhost:9000/mpvies");
    return result.data;
}

function showMovie(movie) {
    return (
        <Movie movie={ movie } /> 
    )
}

function MovieList() {
    return (
        <div>
            {movies.map(showMovie)}
        </div>
    )
}

export default MovieList;