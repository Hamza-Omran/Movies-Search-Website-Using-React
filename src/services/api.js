import { OMDB_API_KEY, OMDB_BASE_URL } from './config';

export const searchMovies = async (query, page = 1) => {
    const res = await fetch(`${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&s=${query}&page=${page}`);
    return res.json();
};

export const getMovieDetails = async (id) => {
    const res = await fetch(`${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&i=${id}&plot=full`);
    return res.json();
};

// Add this function for Favorites page
export const getMovieById = async (id) => {
    const res = await fetch(`${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&i=${id}`);
    return res.json();
};