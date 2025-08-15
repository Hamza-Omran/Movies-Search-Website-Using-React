import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ Title, Year, imdbID, Poster, onFavorite, isFavorite }) => {
    const navigate = useNavigate();

    return (
        <div className="movie-card">
            <img
                src={Poster !== "N/A" ? Poster : "/no-image.png"}
                alt={Title}
            />
            <h2 className="movie-card-title">{Title}</h2>
            <p className="movie-card-year">{Year}</p>
            <div className="movie-card-actions">
                <button
                    onClick={() => navigate(`/movie/${imdbID}`)}
                    className="movie-card-details-btn"
                >
                    Details
                </button>
                <button
                    onClick={() => onFavorite({ Title, Year, imdbID, Poster })}
                    className={`movie-card-fav-btn${isFavorite ? " favorite" : ""}`}
                >
                    {isFavorite ? "Remove" : "Favorite"}
                </button>
            </div>
        </div>
    );
};

export default MovieCard;