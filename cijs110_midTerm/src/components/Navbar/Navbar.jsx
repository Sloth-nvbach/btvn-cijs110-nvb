import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <h1 className="navbar-brand">Anonime</h1>
            <p className="navbar-text">Home</p>
            <p className="navbar-text">List anime</p>
            
            <div className="navbar-search">
                <input type="text" placeholder="Search anime or movie" />
            </div>
        </nav>
    )
}

export default Navbar;