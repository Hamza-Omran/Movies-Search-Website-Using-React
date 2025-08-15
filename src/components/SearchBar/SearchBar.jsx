import React, { useState } from 'react';
import './SearchBar.css'; // optional external CSS

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (term.trim()) {
            onSearch(term);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Search for a movie..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="search-input"
            />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
