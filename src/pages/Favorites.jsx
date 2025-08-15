import React, { useContext, useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { FavoritesContext } from "./FavoritesProvider";
import { getMovieById } from "../services/api";
import "./Favorites.css";

export default function Favorites() {
    const { favorites, removeFavorite } = useContext(FavoritesContext); // favorites is array of IDs
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchMovies() {
            setLoading(true);
            const results = await Promise.all(
                favorites.map((id) => getMovieById(id))
            );
            setMovies(results.filter(m => m && m.Response === "True"));
            setLoading(false);
        }
        if (favorites.length > 0) {
            fetchMovies();
        } else {
            setMovies([]);
        }
    }, [favorites]);

    return (
        <div className="favorites-container">
            <h2 className="favorites-title">Favorites</h2>
            {loading ? (
                <p className="favorites-empty">Loading...</p>
            ) : movies.length === 0 ? (
                <p className="favorites-empty">No favorites yet.</p>
            ) : (
                <MovieList
                    movies={movies}
                    onFavorite={(movie) => removeFavorite(movie.imdbID)}
                    favorites={favorites}
                />
            )}
        </div>
    );
}