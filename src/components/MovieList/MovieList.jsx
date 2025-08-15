import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movies, onFavorite, favorites, passIdOnly = false }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.imdbID}
                    {...movie}
                    onFavorite={
                        passIdOnly
                            ? () => onFavorite(movie.imdbID) // For Favorites page
                            : () => onFavorite(movie)        // For Home page
                    }
                    isFavorite={favorites.includes(movie.imdbID)}
                />
            ))}
        </div>
    );
};

export default MovieList;