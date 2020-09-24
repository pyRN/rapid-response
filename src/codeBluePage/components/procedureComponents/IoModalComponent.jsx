import React, { useState } from "react";
import { useDispatch } from "react-redux";

function IoModalComponent() {
  const fnDispatch = useDispatch();

  const [oIoInfo, fnSetIoInfo] = useState({
    nIoSize: null,
    sOrientation: null,
    sLocation: null
  });

  const aIoSizes = ["15mm", "25mm", "45mm"];
  const aIoOrientations = ["Left", "Right"];
  const aIoLocations = ["Proximal Humerus", "Proximal Tibia", "Distal Tibia"];

  const handleOnClick = (event) => {
    if (event.target.name === "saveBtn") {
      fnDispatch({
        type: "SET_CODE_LOG_STATE",
        payload: {
          sEvent: "Procedure",
          sEventInfo: `${oIoInfo.nIoSize} IO to ${oIoInfo.sOrientation} ${oIoInfo.sLocation}`
        }
      });
    }
    fnSetIoInfo({
      nIoSize: null,
      sOrientation: null,
      sLocation: null
    });
  };

  const handleSizeChange = (event) => {
    fnSetIoInfo({ ...oIoInfo, nIoSize: event.target.name });
  };

  const handleOrientationChange = (event) => {
    fnSetIoInfo({ ...oIoInfo, sOrientation: event.target.name });
  };

  const handleLocationChange = (event) => {
    fnSetIoInfo({ ...oIoInfo, sLocation: event.target.name });
  };

  return (
    <div
      className="modal fade"
      id="ioModal"
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content border-secondary">
          <div className="modal-header bg-dark text-white">
            <h5 className="modal-title mr-auto" id="staticBackdropLabel">
              I.O. Insertion
            </h5>
            <button
              className="btn btn-danger mx-1"
              data-dismiss="modal"
              onClick={handleOnClick}
              name="cancelBtn"
            >
              Cancel
            </button>
            <button
              className="btn btn-success mx-1"
              data-dismiss="modal"
              onClick={handleOnClick}
              name="saveBtn"
            >
              Save
            </button>
          </div>
          <div className="modal-body bg-secondary">
            <h5 className="m-1">
              Size: <span className="badge badge-light">{oIoInfo.nIoSize}</span>
            </h5>
            {aIoSizes.map((ioSize) => {
              return (
                <button
                  className="btn btn-sm btn-primary text-white border-dark m-1"
                  onClick={handleSizeChange}
                  name={ioSize}
                  key={ioSize}
                >
                  {ioSize}
                </button>
              );
            })}
            <h5 className="m-1">
              Orientation:{" "}
              <span className="badge badge-light">{oIoInfo.sOrientation}</span>
            </h5>
            {aIoOrientations.map((orientation) => {
              return (
                <button
                  className="btn btn-sm btn-primary text-white border-dark m-1"
                  onClick={handleOrientationChange}
                  name={orientation}
                  key={orientation}
                >
                  {orientation}
                </button>
              );
            })}
            <h5 className="m-1">
              Location:{" "}
              <span className="badge badge-light">{oIoInfo.sLocation}</span>
            </h5>
            {aIoLocations.map((location) => {
              return (
                <button
                  className="btn btn-sm btn-primary text-white border-dark m-1"
                  onClick={handleLocationChange}
                  name={location}
                  key={location}
                >
                  {location}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IoModalComponent;
