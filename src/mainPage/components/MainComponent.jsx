import React from "react";
import { Link } from "react-router-dom";

//Multimedia
import Caduceus from "../media/caduceus_symbol.png";

//Styles
const oBgStyle = {
  backgroundImage: `url(${Caduceus})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat"
};

function MainComponent() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="jumbotron jumbotron-fluid text-danger bg-dark">
        <div className="container">
          <h1 className="display-2">Rapid Response</h1>
          <hr className="my-4 bg-danger" />
          <p className="lead">A quick charting option for nurses</p>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Link
          className="col-lg p-0 m-3"
          to="/patientCharting"
          style={{ textDecoration: "none" }}
        >
          <div className="card text-white border-success h-100">
            <h5 className="card-header text-dark text-center bg-success">
              Patient Charting
            </h5>
            <div className="card-body bg-dark" style={oBgStyle}>
              <p className="card-text text-center">
                Quick chart patient assessments
              </p>
            </div>
          </div>
        </Link>
        <Link
          className="col-lg p-0 m-3"
          to="/strokeAlert"
          style={{ textDecoration: "none" }}
        >
          <div className="card text-white border-primary h100">
            <h5 className="card-header text-dark text-center bg-primary">
              Stroke Alert
            </h5>
            <div className="card-body bg-dark" style={oBgStyle}>
              <p className="card-text text-center">Quick chart stroke alert</p>
            </div>
          </div>
        </Link>
        <Link
          className="col-lg p-0 m-3"
          to="/codeBlue"
          style={{ textDecoration: "none" }}
        >
          <div className="card text-white border-danger h-100">
            <h5 className="card-header text-dark text-center bg-danger">
              Code Blue
            </h5>
            <div className="card-body bg-dark" style={oBgStyle}>
              <p className="card-text text-center">
                Quick chart cardiac arrest
              </p>
            </div>
          </div>
        </Link>
        <Link
          className="col-lg p-0 m-3"
          to="/resources"
          style={{ textDecoration: "none" }}
        >
          <div className="card text-white border-warning h-100">
            <h5 className="card-header text-dark text-center bg-warning">
              References
            </h5>
            <div className="card-body bg-dark" style={oBgStyle}>
              <p className="card-text text-center">Nursing References</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MainComponent;
