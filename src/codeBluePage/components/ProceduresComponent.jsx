import React from "react";

function ProceduresComponent() {
  return (
    <div className="card text-white m-2 d-inline-flex col-lg p-0 border-secondary">
      <h5
        className="card-header text-dark text-center bg-primary"
        style={{ backgroundColor: "#5DADEC" }}
      >
        Procedures
      </h5>
      <div className="card-body bg-dark text-white">
        <button
          className="btn btn-block btn-outline-primary bg-secondary mb-2 col-sm text-white"
          name="I.V."
          key="I.V."
          data-toggle="modal"
          data-target="#ivModal"
        >
          I.V.
        </button>
        <button
          className="btn btn-block btn-outline-primary bg-secondary mb-2 col-sm text-white"
          name="I.O."
          key="I.O."
          data-toggle="modal"
          data-target="#ioModal"
        >
          I.O.
        </button>
        <button
          className="btn btn-block btn-outline-primary bg-secondary mb-2 col-sm text-white"
          name="Intubation"
          key="Intubation"
          data-toggle="modal"
          data-target="#intubateModal"
        >
          Intubation
        </button>
        <button
          className="btn btn-block btn-outline-primary bg-secondary mb-2 col-sm text-white"
          name="Chest Tube"
          key="Chest Tube"
          data-toggle="modal"
          data-target="#chestTubeModal"
        >
          Chest Tube
        </button>
        <button
          className="btn btn-block btn-outline-primary bg-secondary mb-2 col-sm text-white"
          name="Central Line"
          key="Central Line"
          data-toggle="modal"
          data-target="#centralLineModal"
        >
          Central Line
        </button>
      </div>
    </div>
  );
}
export default ProceduresComponent;
