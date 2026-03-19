import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-brand">Anonime</div>
            <div className="navbar-text">Home</div>
            <div className="navbar-text">List anime</div>
            <div className="navbar-search">
                <input type="text" placeholder="Search anime or movie" />
            </div>
        </nav>
    )
}

export default Navbar;