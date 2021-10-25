import React from "react";
import {Link} from "react-router-dom";
import './navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg">
            <div className="container-fluid px-2">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTop" aria-controls="navbarTop" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTop">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Start</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/launches">Launches</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/space-stations">Space stations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/astronauts">Astronauts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;