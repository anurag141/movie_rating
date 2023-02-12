import React from "react";
import "./Movie.css";

const Movie = ({ movie }) => {
    return (
        <div className="movie">
            <h2> {movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
            <p>Rating: {movie.rating}</p>
        </div>
    );
}
export default Movie