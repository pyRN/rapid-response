import React from "react";

function TriageComponent() {
  const handleOnClick = (event) => {
    if (event.target.checked) {
      document.getElementById("triage-allergy-input").disabled = true;
    } else {
      document.getElementById("triage-allergy-input").disabled = false;
    }
  };

  return (
    <div
      className="card text-white m-2 d-inline-flex col-lg p-0"
      style={{ border: "solid #BFAFB2" }}
    >
      <h5
        className="card-header text-dark text-center"
        style={{ backgroundColor: "#BFAFB2" }}
      >
        Triage
      </h5>
      <div className="card-body bg-dark text-white">
        <h5>Chief Complaint:</h5>
        <div className="input-group mb-3">
          <textarea className="rounded form-control" id="triage-cc-textarea" />
        </div>
        <h5>Allergies:</h5>
        <div className="input-group mb-1">
          <input
            type="text"
            className="form-control"
            id="triage-allergy-input"
          />
        </div>
        <div className="input-group mb-1">
          <input
            type="checkbox"
            className="m-2 rounded"
            id="triage-allergy-checkbox"
            onClick={handleOnClick}
          />
          <p className="m-1">No Known Allergies</p>
        </div>
        <h5>ESI:</h5>
        <div className="input-group">
          <select
            name="esi"
            id="triage-esi-select "
            className="rounded form-control"
          >
            <option value="ESI-Placeholder">Choose ESI</option>
            <option value="Critical-1">1 - Critical</option>
            <option value="Emergent-2">2 - Emergent</option>
            <option value="Urgent-3">3 - Urgent</option>
            <option value="Non-Urgent-4">4 - Non-Urgent</option>
            <option value="Minor-5">5 - Minor</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TriageComponent;
