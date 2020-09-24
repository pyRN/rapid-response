import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function CodeNavBarComponent() {
  const fnDispatch = useDispatch();

  //State
  const oCodeBlueState = useSelector((state) => state.oCodeBlueReducer);

  //Local state
  const [oCurrentTime, fnSetCurrentTime] = useState(
    new Date().toLocaleTimeString("en-GB")
  );

  //
  useEffect(() => {
    let interval = setInterval(() => {
      fnSetCurrentTime(new Date().toLocaleTimeString("en-GB"));
      if (oCodeBlueState.bCodeStart) {
        let newSeconds =
          parseInt(oCodeBlueState.oCodeTime.sCodeSeconds, 10) + 1;
        let newMinutes = parseInt(oCodeBlueState.oCodeTime.sCodeMinutes, 10);
        let newHours = parseInt(oCodeBlueState.oCodeTime.sCodeHours, 10);

        if (newSeconds > 59) {
          newSeconds = 0;
          newMinutes = newMinutes + 1;
        }

        if (newMinutes > 59) {
          newMinutes = 0;
          newHours = newHours + 1;
        }

        fnDispatch({
          type: "SET_CODE_TIME",
          payload: {
            sCodeHours:
              newHours.toString().length < 2
                ? "0" + newHours.toString()
                : newHours.toString(),
            sCodeMinutes:
              newMinutes.toString().length < 2
                ? "0" + newMinutes.toString()
                : newMinutes.toString(),
            sCodeSeconds:
              newSeconds.toString().length < 2
                ? "0" + newSeconds.toString()
                : newSeconds.toString(),
            bCodeStart: true
          }
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [oCodeBlueState, fnDispatch]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark navBarBackground sticky-top justify-content-center"
      style={{ backgroundColor: "black" }}
    >
      <Link
        className="btn btn-outline-primary m-1 font-weight-bold"
        style={{
          textDecoration: "none"
        }}
        to="/"
      >
        Back
      </Link>
      {oCodeBlueState.bCodeStart ? (
        <button
          type="button"
          className="btn btn-outline-danger rounded font-weight-bold text-danger m-1"
          disabled
        >
          Code:{" "}
          {`${oCodeBlueState.oCodeTime.sCodeHours}:${oCodeBlueState.oCodeTime.sCodeMinutes}:${oCodeBlueState.oCodeTime.sCodeSeconds}`}
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-danger rounded font-weight-bold text-white m-1"
          onClick={() => {
            fnDispatch({
              type: "SET_CODE_TIMER_STATE",
              payload: {
                bCodeStart: true
              }
            });

            fnDispatch({
              type: "SET_CODE_LOG_STATE",
              payload: {
                sEvent: "CPR",
                sEventInfo: "Patient Arrived"
              }
            });
          }}
        >
          Pt Arrive
        </button>
      )}
      <button
        type="button"
        className="btn btn-outline-danger rounded font-weight-bold text-danger m-1"
        disabled
      >
        Time: {oCurrentTime}
      </button>
      <button
        type="button"
        className="btn btn-block btn-warning rounded font-weight-bold m-1 w-25"
        data-toggle="modal"
        data-target="#logModal"
      >
        Log
      </button>
    </nav>
  );
}

export default CodeNavBarComponent;
