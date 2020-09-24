import React from "react";
import { useDispatch } from "react-redux";

function NotesComponent() {
  const fnDispatch = useDispatch();

  const handleOnClick = (event) => {
    let sText = document.getElementById("noteTextArea").value;
    let rCharacters = /\w+/g;
    let aIsText = sText.match(rCharacters);

    if (aIsText && aIsText.length) {
      fnDispatch({
        type: "SET_CODE_LOG_STATE",
        payload: {
          sEvent: "Note",
          sEventInfo: document.getElementById("noteTextArea").value
        }
      });
    }
    document.getElementById("noteTextArea").value = "";
  };

  return (
    <div className="card text-white m-2 d-inline-flex col-lg p-0 border-secondary">
      <h5
        className="card-header text-dark text-center bg-primary"
        style={{ backgroundColor: "#5DADEC" }}
      >
        Notes
      </h5>
      <div className="card-body bg-dark text-white">
        <textarea
          className="w-100 mb-2"
          id="noteTextArea"
          placeholder="Ad Hoc Notes"
        />
        <button
          className="btn btn-block btn-success"
          name="Note"
          onClick={handleOnClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default NotesComponent;
