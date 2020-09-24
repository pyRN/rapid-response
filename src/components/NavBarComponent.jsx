import React from "react";
import { Link } from "react-router-dom";

function NavBarComonent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navBarBackground">
      <h2 className="navbar-brand text-primary">Code Blue</h2>
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/">
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/log">
              Log
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/team">
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/procedures">
              Procedures
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/meds">
              Medications
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/reference">
              References
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarComonent;
