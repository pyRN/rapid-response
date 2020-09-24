import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CprComponent() {
  const oCprTime = useSelector((state) => state.oCodeBlueReducer.oCprTime);
  const fnDispatch = useDispatch();

  const handleOnClick = (event) => {
    fnDispatch({
      type: "SET_CPR_TIME_STATE",
      payload: {
        sCprMinutes:
          event.target.name === "stopCpr" ? "00" : oCprTime.sCprMinutes,
        sCprSeconds:
          event.target.name === "stopCpr" ? "00" : oCprTime.sCprSeconds,
        bCprInProgress: event.target.name === "stopCpr" ? false : true
      }
    });

    fnDispatch({
      type: "SET_CODE_LOG_STATE",
      payload: {
        sEvent: "CPR",
        sEventInfo:
          event.target.name === "stopCpr" ? "CPR Stopped" : "CPR Started"
      }
    });
  };

  useEffect(() => {
    if (oCprTime.bCprInProgress) {
      let interval = setInterval(() => {
        let newSeconds = parseInt(oCprTime.sCprSeconds, 10) + 1;
        let newMinutes = parseInt(oCprTime.sCprMinutes, 10);

        if (newSeconds > 59) {
          newSeconds = 0;
          newMinutes = newMinutes + 1;
        }

        fnDispatch({
          type: "SET_CPR_TIME_STATE",
          payload: {
            sCprMinutes:
              newMinutes.toString().length < 2
                ? "0" + newMinutes.toString()
                : newMinutes.toString(),
            sCprSeconds:
              newSeconds.toString().length < 2
                ? "0" + newSeconds.toString()
                : newSeconds.toString(),
            bCprInProgress: true
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [oCprTime, fnDispatch]);

  return (
    <div className="card text-white m-2 d-inline-flex col-lg p-0 border-secondary">
      <h5
        className="card-header text-dark text-center bg-primary"
        style={{ backgroundColor: "#5DADEC" }}
      >
        CPR
      </h5>
      <div className="card-body bg-dark text-white">
        <button
          className="btn btn-block btn-outline-danger font-weight-bold mb-2"
          style={{ backgroundColor: "black" }}
          disabled
        >
          Current CPR Time: {oCprTime.sCprMinutes}:{oCprTime.sCprSeconds}
        </button>
        <button
          className="btn btn-block btn-danger mb-2"
          name="stopCpr"
          onClick={handleOnClick}
        >
          Stop
        </button>
        <button
          className="btn btn-block btn-success"
          name="startCpr"
          onClick={handleOnClick}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default CprComponent;
