import React from "react";
import { Link } from "react-router-dom";

function NavBarComonent() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark static-top sticky-top"
      style={{ backgroundColor: "black" }}
    >
      <Link
        className="btn btn-outline-primary mr-auto"
        style={{
          textDecoration: "none"
        }}
        to="/"
      >
        Main Menu
      </Link>
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <h5 className="text-white m-2">
          {new Date().toLocaleDateString()} -{" "}
          {new Date().toLocaleTimeString("en-GB")}
        </h5>
      </div>
    </nav>
  );
}

export default NavBarComonent;
