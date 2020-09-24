import React from "react";

function NoteComponent() {
  return (
    <div
      className="card text-white m-2 d-inline-flex col-lg p-0"
      style={{ border: "solid #E88E5A" }}
    >
      <h5
        className="card-header text-dark text-center"
        style={{ backgroundColor: "#E88E5A" }}
      >
        Notes
      </h5>

      <div className="card-body bg-dark text-white">
        <h5>Ad Hoc Note:</h5>
        <div className="input-group mb-3">
          <textarea className="rounded form-control" id="triage-cc-textarea" />
        </div>
      </div>
    </div>
  );
}

export default NoteComponent;
