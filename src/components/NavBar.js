import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Sydney Preston
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-link">
            <NavLink
              className="nav-link"
              to="/"
              isActive={() => window.location.pathname === "/"}
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              className="nav-link"
              to="/portfolio"
              activeClassName="active"
            >
              Portfolio
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
