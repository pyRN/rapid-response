import React, { useState } from "react";
import { useDispatch } from "react-redux";

function IvModalComponent() {
  const fnDispatch = useDispatch();

  const [oIvInfo, fnSetIvInfo] = useState({
    nIvSize: null,
    nLumens: null,
    sOrientation: null,
    sLocation: null
  });

  const aIvSizes = ["14g", "16g", "18g", "20g", "22g", "25g"];
  const aIvOrientation = ["Left", "Right"];
  const aIvLumens = ["Single", "Double", "Triple"];
  const aIvLocations = [
    "Hand",
    "Wrist",
    "Forearm",
    "E.J.",
    "A.C.",
    "Leg",
    "Foot",
    "Breast",
    "Scalp"
  ];

  const handleOnClick = (event) => {
    if (event.target.name === "saveBtn") {
      fnDispatch({
        type: "SET_CODE_LOG_STATE",
        payload: {
          sEvent: "Procedure",
          sEventInfo: `${oIvInfo.nIvSize} ${oIvInfo.nLumens} Lumen IV to ${oIvInfo.sOrientation} ${oIvInfo.sLocation}`
        }
      });
    }
    fnSetIvInfo({
      nIvSize: null,
      nLumens: null,
      sOrientation: null,
      sLocation: null
    });
  };

  const handleSizeChange = (event) => {
    fnSetIvInfo({ ...oIvInfo, nIvSize: event.target.name });
  };

  const handleOrientationChange = (event) => {
    fnSetIvInfo({ ...oIvInfo, sOrientation: event.target.name });
  };

  const handleLumenChange = (event) => {
    fnSetIvInfo({ ...oIvInfo, nLumens: event.target.name });
  };

  const handleLocationChange = (event) => {
    fnSetIvInfo({ ...oIvInfo, sLocation: event.target.name });
  };

  return (
    <div
      className="modal fade"
      id="ivModal"
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
              I.V. Insertion
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
              Size: <span className="badge badge-light">{oIvInfo.nIvSize}</span>
            </h5>
            {aIvSizes.map((ivSize) => {
              return (
                <button
                  className="btn btn-sm btn-primary text-white border-dark m-1"
                  onClick={handleSizeChange}
                  name={ivSize}
                  key={ivSize}
                >
                  {ivSize}
                </button>
              );
            })}

            <h5 className="m-1">
              Lumens:{" "}
              <span className="badge badge-light">{oIvInfo.nLumens}</span>
            </h5>
            {aIvLumens.map((lumens) => {
              return (
                <button
                  className="btn btn-sm btn-primary text-white border-dark m-1"
                  onClick={handleLumenChange}
                  name={lumens}
                  key={lumens}
                >
                  {lumens}
                </button>
              );
            })}
            <h5 className="m-1">
              Orientation:{" "}
              <span className="badge badge-light">{oIvInfo.sOrientation}</span>
            </h5>
            {aIvOrientation.map((orientation) => {
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
              <span className="badge badge-light">{oIvInfo.sLocation}</span>
            </h5>
            {aIvLocations.map((location) => {
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

export default IvModalComponent;
