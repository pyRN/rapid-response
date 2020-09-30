import React, { useState } from "react";
import { useDispatch } from "react-redux";

function IntubateModalComponent() {
  const fnDispatch = useDispatch();

  const [oIoInfo, fnSetIoInfo] = useState({
    nEtSize: null,
    sOrientation: null,
    sLocation: null,
    nSecuredMark: null,
    sSecuredAt: null
  });

  const aEtSizes = ["3.5mm", "4.0mm", "4.5mm", "5.0mm", "5.5mm", "6.0mm", "6.5mm", "7.0mm", "7.5mm", "8.0mm"];
  const aEtOrientations = ["Left", "Right", "Center"];
  const aEtLocations = ["Nare", "Oral", "Trachea"];
  const aEtSecuredAt = ["Lips", "Gums", "Teeth"];
  const aEtSecuredMark = ["11cm", "12cm", "13cm", "14cm", "15cm", "16cm", "17cm", "18cm", "19cm", "20cm", "21cm", "22cm", "23cm", "24cm"]

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
      nEtSize: null,
      sOrientation: null,
      sLocation: null,
      nSecuredMark: null,
      sSecuredAt: null
    });
  };

  const handleSizeChange = (event) => {
    fnSetIoInfo({ ...oIoInfo, nEtSize: event.target.name });
  };

  const handleOrientationChange = (event) => {
    fnSetIoInfo({ ...oIoInfo, sOrientation: event.target.name });
  };

  const handleLocationChange = (event) => {
    fnSetIoInfo({ ...oIoInfo, sLocation: event.target.name });
  };
  const handleSecuredAtChange = (event) => {
    fnSetIoInfo({ ...oIoInfo, sLocation: event.target.name });
  };
  const handleSecuredMarkChange = (event) => {
    fnSetIoInfo({ ...oIoInfo, sLocation: event.target.name });
  };

  return (
    <div
      className="modal fade"
      id="intubateModal"
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

export default IntubateModalComponent;
