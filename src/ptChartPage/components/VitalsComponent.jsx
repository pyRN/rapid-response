import React from "react";

function VitalsComponent() {
  return (
    <div
      className="card text-white m-2 d-inline-flex col-lg p-0"
      style={{ border: "solid #AD6F69" }}
    >
      <h5
        className="card-header text-dark text-center"
        style={{ backgroundColor: "#AD6F69" }}
      >
        Vitals
      </h5>

      <div className="card-body bg-dark text-white">
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-primary text-white border-primary"
              id="inputGroup-sizing-sm"
            >
              BP
            </span>
          </div>
          <input
            type="number"
            className="form-control"
            placeholder="Systolic"
          />
          <input
            type="number"
            className="form-control"
            placeholder="Diastolic"
          />
        </div>
        <div className="row">
          <div className="input-group input-group-sm mb-3 col">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-primary text-white border-primary"
                id="inputGroup-sizing-sm"
              >
                HR
              </span>
            </div>
            <input type="number" className="form-control" />
          </div>
          <div className="input-group input-group-sm mb-3 col">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-primary text-white border-primary"
                id="inputGroup-sizing-sm"
              >
                Resp
              </span>
            </div>
            <input type="number" className="form-control" />
          </div>
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-primary text-white border-primary"
              id="inputGroup-sizing-sm"
            >
              Temp
            </span>
          </div>
          <input type="number" className="form-control" />
          <select className="custom-select" id="inputGroupSelect01">
            <option value="1">Fahrenheit</option>
            <option value="2">Celsius</option>
          </select>
        </div>
        <div className="row">
          <div className="input-group input-group-sm mb-3 col">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-primary text-white border-primary"
                id="inputGroup-sizing-sm"
              >
                SpO2
              </span>
            </div>
            <input type="number" className="form-control" />
            <div className="input-group-append">
              <span
                className="input-group-text bg-primary text-white border-primary"
                id="inputGroup-sizing-sm"
              >
                %
              </span>
            </div>
          </div>
          <div className="input-group input-group-sm mb-3 col">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-primary text-white border-primary"
                id="inputGroup-sizing-sm"
              >
                CO2
              </span>
            </div>
            <input type="number" className="form-control" />
          </div>
        </div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-primary text-white border-primary"
              id="inputGroup-sizing-sm"
            >
              CBG
            </span>
          </div>
          <input type="number" className="form-control" />
        </div>
        {/* <button className="btn btn-block btn-success">Add</button> */}
      </div>
    </div>
  );
}

export default VitalsComponent;
