import React from "react";

function AAOModalComponent() {
  return (
    <div
      className="modal fade"
      id="neuro-aao-modal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-warning">
            <h5 className="modal-title text-dark text-center">
              Awake, Alert, Oriented
            </h5>
          </div>
          <div className="modal-body bg-dark">
            <div className="col">
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Awake</label>
              <br />
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Alert</label>
              <br />
              <input type="radio" id="other" name="gender" value="other" />
              <label for="other">Other</label>
            </div>
          </div>
          <div className="modal-footer bg-dark">
            <button
              type="button"
              className="btn btn-block btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AAOModalComponent;
