import React from "react";

function FooterComponent() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-bottom row"
      style={{ backgroundColor: "black" }}
    >
      <button className="btn btn-outline-success ml-auto" type="submit">
        Save
      </button>
      <button className="btn btn-outline-danger m-1" type="submit">
        Cancel
      </button>
    </nav>
  );
}

export default FooterComponent;
