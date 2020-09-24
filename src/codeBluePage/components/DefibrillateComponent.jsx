import React from "react";
import { useDispatch } from "react-redux";

function DefibrillateComponent() {
  const fnDispatch = useDispatch();

  const handleOnClick = (event) => {
    let sRhythm = document.getElementById("rhythmSelect").value;
    let sJoules = document.getElementById("joulesSelect").value;
    fnDispatch({
      type: "SET_CODE_LOG_STATE",
      payload: {
        sEvent: "Shock",
        sEventInfo: `${sRhythm} defibrillated at ${sJoules}`
      }
    });
  };

  return (
    <div className="card text-white m-2 d-inline-flex col-lg p-0 border-secondary">
      <h5
        className="card-header text-dark text-center bg-primary"
        style={{ backgroundColor: "#5DADEC" }}
      >
        Defibrillate
      </h5>
      <div className="card-body bg-dark text-white">
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text border-warning bg-warning text-dark">
              Rhythm
            </div>
          </div>
          <select className="form-control custom-select" id="rhythmSelect">
            <option value="V-Fib">V-Fib</option>
            <option value="V-Tach">V-Tach</option>
          </select>
        </div>
        <select className="custom-select mb-2" id="joulesSelect">
          <option value="50 Joules">50 Joules</option>
          <option value="100 Joules">100 Joules</option>
          <option value="200 Joules">200 Joules</option>
          <option value="300 Joules">300 Joules</option>
          <option value="360 Joules">360 Joules</option>
        </select>
        <button
          className="btn btn-block btn-warning"
          name="shock"
          onClick={handleOnClick}
        >
          Shock
        </button>
      </div>
    </div>
  );
}

export default DefibrillateComponent;
