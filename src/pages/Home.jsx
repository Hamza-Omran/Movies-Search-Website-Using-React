import React, { useState, useContext } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import MovieList from '../components/MovieList/MovieList';
import { searchMovies } from '../services/api';
import { FavoritesContext } from './FavoritesProvider';
import './Home.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

    const handleSearch = async (query) => {
        setLoading(true);
        setError('');
        const data = await searchMovies(query);
        setLoading(false);

        if (data.Response === "True") {
            setMovies(data.Search);
        } else {
            setMovies([]);
            setError(data.Error);
        }
    };

    const toggleFavorite = (movie) => {
        const isFav = favorites.includes(movie.imdbID);
        if (isFav) {
            removeFavorite(movie.imdbID);
        } else {
            addFavorite(movie.imdbID);
        }
    };

    return (
        <div className="home-container">
            <h1 className="home-title">Movie Search</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <p className="home-loading">Loading...</p>}
            {error && <p className="home-error">{error}</p>}
            <MovieList
                movies={movies}
                onFavorite={toggleFavorite}
                favorites={favorites}
            />
        </div>
    );
};

export default Home;