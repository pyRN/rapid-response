import React from "react";
import { useDispatch } from "react-redux";

function QuickMedComponent() {
  const fnDispatch = useDispatch();

  const handleOnClick = (event) => {
    fnDispatch({
      type: "SET_CODE_LOG_STATE",
      payload: {
        sEvent: "Medication",
        sEventInfo: event.target.name
      }
    });
  };

  const aQuickMedicationNames = [
    "Epinepherine 1mg",
    "Amiodarone 300mg",
    "Amiodarone 150mg",
    "Magnesium Sulfate 1g",
    "Atropine 0.5mg",
    "Sodium Bicarb 50mEq",
    "Calcium Chloride 1g",
    "Dextrose 50% 25g"
  ];

  return (
    <div className="card text-white m-2 d-inline-flex col-lg p-0 border-secondary">
      <h5
        className="card-header text-dark text-center bg-primary"
        style={{ backgroundColor: "#5DADEC" }}
      >
        Quick Meds
      </h5>
      <div className="card-body bg-dark text-white">
        {aQuickMedicationNames.map((sMedicationName) => {
          return (
            <button
              className="btn btn-block btn-outline-primary bg-secondary mb-2 col-sm text-white"
              name={sMedicationName}
              onClick={handleOnClick}
              key={sMedicationName}
            >
              {sMedicationName}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default QuickMedComponent;
