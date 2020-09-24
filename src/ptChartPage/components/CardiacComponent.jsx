import React from "react";

//Components
import CheckboxComponent from "./CheckboxComponent";

function CardiacComponent() {
  const handleOnInput = (event) => {
    if (event.target.value.length) {
      document.getElementById("cards-note-checkbox").checked = true;
    } else {
      document.getElementById("cards-note-checkbox").checked = false;
    }
  };

  const handleOnChange = () => {
    document.getElementById("cards-note-checkbox").checked
      ? document.getElementById("cards-note-input").focus()
      : document.getElementById("cards-note-input").blur();
  };
  return (
    <div
      className="card text-white m-2 d-inline-flex col-lg p-0"
      style={{ border: "solid #5DADEC" }}
    >
      <h5
        className="card-header text-dark text-center"
        style={{ backgroundColor: "#5DADEC" }}
      >
        Cardiovascular
      </h5>
      <div className="card-body bg-dark text-white">
        <CheckboxComponent
          sCheckboxId="cards-wnl-checkbox"
          sLabel="Assessment WNL"
          sLabelId="cards-wnl-checkbox"
        />
        <CheckboxComponent
          sCheckboxId="cards-tachy-checkbox"
          sLabel="Tachycardia"
          sLabelId="cards-tachy-checkbox"
        />
        <CheckboxComponent
          sCheckboxId="cards-brady-checkbox"
          sLabel="Bradycardia"
          sLabelId="cards-brady-checkbox"
        />
        <CheckboxComponent
          sCheckboxId="cards-rhythm-checkbox"
          sLabel="Heart Rhythm"
          sLabelId="cards-rhythm-checkbox"
        />
        <div className="form-check">
          <input
            type="checkbox"
            id="cards-note-checkbox"
            className="form-check-input"
            onChange={handleOnChange}
          />
          <input
            id="cards-note-input"
            type="text"
            placeholder="Note"
            onChange={handleOnInput}
          />
        </div>
      </div>
    </div>
  );
}

export default CardiacComponent;
