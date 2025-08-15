import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getMovieDetails } from '../services/api';
import './MovieDetails.css'; // import the CSS file

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMovieDetails(id).then(setMovie);
    }, [id]);

    if (!movie) return <p className="loading">Loading...</p>;

    return (
        <div className="movie-details-container">
            <div className="movie-details-card">
                <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                <div className="movie-info">
                    <h1 className="movie-title">{movie.Title}</h1>
                    <p className="movie-subtitle">{movie.Year} • {movie.Genre} • {movie.Runtime}</p>
                    <p className="movie-plot">{movie.Plot}</p>
                    <div className="movie-meta">
                        <span className="movie-rating">⭐ {movie.imdbRating}</span>
                        <span className="movie-actors">{movie.Actors}</span>
                    </div>
                    <p className="movie-director">Director: {movie.Director}</p>
                    <p className="movie-language">Language: {movie.Language}</p>
                    <p className="movie-country">Country: {movie.Country}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
