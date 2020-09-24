import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StrokeNavBarComponent() {
  //Local state
  const [oCurrentTime, fnSetCurrentTime] = useState(
    new Date().toLocaleTimeString("en-GB")
  );

  //
  useEffect(() => {
    let interval = setInterval(
      () => fnSetCurrentTime(new Date().toLocaleTimeString("en-GB")),
      1000
    );
    return () => clearInterval(interval);
  }, []);

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

      {/* <MainClockComponent/> */}
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item  mx-3">
            <button
              type="button"
              className="btn btn-outline-danger btn-block rounded font-weight-bold text-danger"
              disabled
            >
              Stroke Alert:
            </button>
          </li>
          <li className="nav-item  mx-3">
            <button
              type="button"
              class="btn btn-outline-danger btn-block rounded font-weight-bold text-danger"
              disabled
            >
              Time: {oCurrentTime}
            </button>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              className="nav-link text-primary font-weight-bold"
              to="/strokeAlert"
            >
              Stroke
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary font-weight-bold" to="/log">
              Log
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary font-weight-bold" to="/team">
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-primary font-weight-bold"
              to="/procedures"
            >
              Procedures
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary font-weight-bold" to="/meds">
              Medications
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-primary font-weight-bold"
              to="/reference"
            >
              References
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default StrokeNavBarComponent;
