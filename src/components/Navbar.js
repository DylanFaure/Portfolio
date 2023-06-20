import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    const location = useLocation();
    return (
        <header>
            {/* <h2 className="Header-title">
                Portfolio
            </h2> */}
            <nav className="Header-nav">
                {
                location.pathname === "/" ?
                <Link to="/" className="Header-link-active">
                    Home
                </Link>
                :
                <Link to="/" className="Header-link">
                    Home
                </Link>
                }
                {
                location.pathname === "/game-development" ?
                <Link to="/game-development" className={"Header-link-active"}>
                    Game Development
                </Link>
                :
                <Link to="/game-development" className={"Header-link"}>
                    Game Development
                </Link>
                }
                {/* {
                location.pathname === "/contact" ?
                <Link to="/contact" className="Header-link-active">
                    Contact
                </Link>
                :
                <Link to="/contact" className="Header-link">
                    Contact
                </Link>
                } */}
            </nav>
        </header>
    )
}

export default Navbar;