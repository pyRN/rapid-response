import React from "react";

//Components
import CheckboxComponent from "./CheckboxComponent";
import GCSModalComponent from "./GCSModalComponent";
import NIHModalComponent from "./NIHModalComponent";

function NeuroComponent() {
  const handleOnInput = (event) => {
    if (event.target.value.length) {
      document.getElementById("neuro-note-checkbox").checked = true;
    } else {
      document.getElementById("neuro-note-checkbox").checked = false;
    }
  };

  const handleOnChange = () => {
    document.getElementById("neuro-note-checkbox").checked
      ? document.getElementById("neuro-note-input").focus()
      : document.getElementById("neuro-note-input").blur();
  };

  return (
    <div
      className="card text-white m-2 d-inline-flex col-lg p-0"
      style={{ border: "solid #FFAA1D" }}
    >
      <h5
        className="card-header text-dark text-center"
        style={{ backgroundColor: "#FFAA1D" }}
      >
        Neurological
      </h5>

      <div className="card-body bg-dark text-white">
        <CheckboxComponent
          sCheckboxId="neuro-wnl-checkbox"
          sLabel="Assessment WNL"
          sLabelId="neuro-wnl-checkbox"
        />
        <CheckboxComponent
          sCheckboxId="neuro-aao3-checkbox"
          sLabel="AAO x 3"
          sLabelId="neuro-aao3-checkbox"
        />
        <CheckboxComponent
          sCheckboxId="neuro-awake-checkbox"
          sLabel="Awake"
          sLabelId="neuro-awake-checkbox"
        />
        <CheckboxComponent
          sCheckboxId="neuro-alert-checkbox"
          sLabel="Alert"
          sLabelId="neuro-alert-checkbox"
        />
        <CheckboxComponent
          sCheckboxId="neuro-person-checkbox"
          sLabel="Oriented to Person"
          sLabelId="neuro-person-checkbox"
        />
        <CheckboxComponent
          sCheckboxId="neuro-place-checkbox"
          sLabel="Oriented to Place"
          sLabelId="neuro-place-checkbox"
        />
        <CheckboxComponent
          sCheckboxId="neuro-time-checkbox"
          sLabel="Oriented to Time"
          sLabelId="neuro-time-checkbox"
        />
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="neuro-gcs-checkbox"
            data-toggle="modal"
            data-target="#neuro-gcs-modal"
          />
          <label className="form-check-label" id="neuro-gcs-checkbox">
            GCS
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="neuro-nih-checkbox"
            data-toggle="modal"
            data-target="#neuro-nih-modal"
          />
          <label className="form-check-label" id="neuro-nih-checkbox">
            NIH
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="neuro-perla-checkbox"
          />
          <label className="form-check-label" id="neuro-perla-checkbox">
            PERLA
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            id="neuro-note-checkbox"
            className="form-check-input"
            onChange={handleOnChange}
          />
          <input
            id="neuro-note-input"
            type="text"
            placeholder="Note"
            onChange={handleOnInput}
          />
        </div>
      </div>
      <GCSModalComponent />
      <NIHModalComponent />
    </div>
  );
}

export default NeuroComponent;
