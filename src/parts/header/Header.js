import React from "react";
import './header.scss';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tasks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Members</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                User
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="userDropdown">
                                <li><a className="dropdown-item" href="#">Faisal Ahmed</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
}

export default Header;