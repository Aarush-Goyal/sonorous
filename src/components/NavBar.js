import React from "react";
import "./css/NavBar.css";
const NavBar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="#">
        The Sonorous Youth
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Events
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact Us
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Follow Us
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Instagram
              </a>
              <a className="dropdown-item" href="#">
                Facebook
              </a>
              <a className="dropdown-item" href="#">
                Linkedin
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default NavBar;
