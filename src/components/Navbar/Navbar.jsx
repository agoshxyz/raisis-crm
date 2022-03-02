import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import loginIcon from '../../images/login-icon.svg'
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src={logo} width={195} height={51.82} alt="logo-navbar" />
        <div className="nav-links">
          <div>
            {" "}
            <Link exact to="/" className="nav-item-home">
              Acasă
            </Link>
          </div>

          <div >
            {" "}
            <Link exact to="/pricing" className="nav-item">
              Preț
            </Link>
          </div>

          <div>
            {" "}
            <Link exact to="/contact" className="nav-item">
              Contact
            </Link>
          </div>

          <div>

            <Link exact to="/login" className="nav-item">
            <img src={loginIcon} alt="Login icon" className="login-icon"/>
              Intră in Cont
            </Link>
          </div>

          <div>
            {" "}
            <Link exact to="/sign-up" className="nav-item navbar-btn">
              Incepe acum
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
