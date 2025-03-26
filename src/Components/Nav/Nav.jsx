import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, NavLink } from 'react-router-dom';
import Style from './Nav.module.css';
import logo from '../../assets/logo.jpg';
import SocialMedia from '../SocialMedia/SocialMedia';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                {/* السوشيال ميديا في البداية */}
                <div className="d-flex order-lg-2">
                    <SocialMedia />
                </div>

                {/* اللوجو */}
                <Link className="navbar-brand mx-3" to="">
                    <img className={Style.logo} src={logo} alt="Food Recipes" />
                </Link>

                {/* زرار القائمة في الموبايل */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* روابط الناف بار */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="recipes">All Recipes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
