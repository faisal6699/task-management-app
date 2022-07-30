import React from "react";
import './header.scss';
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div className={location.pathname === '/login' ? 'd-none' : 'd-block'}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link active" aria-current="page">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/tasks'} className="nav-link">Tasks</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'members'} className="nav-link">Members</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="userDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                User
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="userDropdown">
                                <li><a className="dropdown-item">Faisal Ahmed</a></li>
                                <li><a className="dropdown-item">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
        )
}

export default Header;