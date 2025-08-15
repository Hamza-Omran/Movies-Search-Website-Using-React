import React from "react";
import { Link } from "react-router";

function Navbar() {
    return (
        <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
            <Link to="/" style={{ marginRight: "15px", color: "#fff" }}>Home</Link>
            <Link to="/favorites" style={{ color: "#fff" }}>Favorites</Link>
        </nav>
    );
}

export default Navbar;
