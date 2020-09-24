import React from "react";

//Components
import CheckboxComponent from "./CheckboxComponent";

function RespiratoryComponent() {
  const handleOnInput = (event) => {
    if (event.target.value.length) {
      document.getElementById("resp-note-checkbox").checked = true;
    } else {
      document.getElementById("resp-note-checkbox").checked = false;
    }
  };

  const handleOnChange = () => {
    document.getElementById("resp-note-checkbox").checked
      ? document.getElementById("resp-note-input").focus()
      : document.getElementById("resp-note-input").blur();
  };

  return (
    <div
      className="card text-white m-2 d-inline-flex col-lg p-0"
      style={{ border: "solid #299617" }}
    >
      <h5
        className="card-header text-dark text-center"
        style={{ backgroundColor: "#299617" }}
      >
        Respiratory
      </h5>
      <div className="card-body bg-dark text-white">
        <CheckboxComponent
          sCheckboxId="resp-wnl-checkbox"
          sLabel="Assessment WNL"
          sLabelId="resp-wnl-checkbox"
        />
        <CheckboxComponent
          sCheckboxId="resp-tachy-checkbox"
          sLabel="Tachypnea"
          sLabelId="resp-tachy-checkbox"
        />
        <CheckboxComponent
          sCheckboxId="resp-brady-checkbox"
          sLabel="Bradypnea"
          sLabelId="resp-brady-checkbox"
        />
        <CheckboxComponent
          sCheckboxId="resp-sounds-checkbox"
          sLabel="Breath Sounds"
          sLabelId="resp-sounds-checkbox"
        />

        <div className="form-check">
          <input
            type="checkbox"
            id="resp-note-checkbox"
            className="form-check-input"
            onChange={handleOnChange}
          />
          <input
            id="resp-note-input"
            type="text"
            placeholder="Note"
            onChange={handleOnInput}
          />
        </div>
      </div>
    </div>
  );
}

export default RespiratoryComponent;
