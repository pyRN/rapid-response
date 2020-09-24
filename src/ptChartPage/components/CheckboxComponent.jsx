import React from "react";

function CheckboxComponent({ sCheckboxId, sLabel, sLabelId }) {
  return (
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id={sCheckboxId} />
      <label className="form-check-label" id={sLabelId}>
        {sLabel}
      </label>
    </div>
  );
}

export default CheckboxComponent;
