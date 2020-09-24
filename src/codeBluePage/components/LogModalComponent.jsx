import React from "react";
import { useSelector } from "react-redux";

function LogModalComponent() {
  const aCodeLog = useSelector((state) =>
    state.oCodeBlueReducer.aCodeLog.reverse()
  );

  let nIterator = 0;

  return (
    <div
      className="modal fade bd-example-modal-lg"
      style={{ backgroundColor: "black" }}
      id="logModal"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content bg-dark">
          <div className="row m-auto sticky-top bg-dark w-100">
            <h2 className="text-primary ml-2 my-2">Code Log</h2>
            <button
              type="button"
              className="btn btn-danger rounded font-weight-bold ml-auto mr-2 my-2"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
          <ul className="list-group">
            {aCodeLog.map((event) => {
              nIterator++;
              return (
                <li
                  className="list-group-item border-dark m-1 p-0"
                  style={{ backgroundColor: "black" }}
                  key={nIterator}
                >
                  <div
                    className={
                      event.sEvent === "Medication"
                        ? "bg-info p-1"
                        : event.sEvent === "Procedure"
                        ? "bg-success p-1"
                        : event.sEvent === "CPR"
                        ? "bg-danger p-1"
                        : event.sEvent === "Shock"
                        ? "bg-warning p-1"
                        : event.sEvent === "Note"
                        ? "bg-light p-1"
                        : null
                    }
                  >
                    {event.tEventTime} - {event.sEvent}
                  </div>
                  <div className="p-1 bg-secondary text-white">
                    <p className="card-text">{event.sEventInfo}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LogModalComponent;
