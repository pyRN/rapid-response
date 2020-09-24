import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ReferenceNavBarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navBarBackground">
      <Link
        className="btn btn-outline-primary mr-auto font-weight-bold"
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
    </nav>
  );
}

export default ReferenceNavBarComponent;
