import './Movie.css';

function Movie({ movie }) {
    return (
        <div className="Movie">
            <div className="Card">
                <h2>{movie.title}</h2>
                <img src={movie.image} alt={movie.title} />
                <p>Rating: {movie.rating}</p>
            </div>
        </div>
    );
}

export default Movie;