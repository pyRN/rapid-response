import React from "react";

//Components
import ReferenceNavBarComponent from "./ReferenceNavBarComponent";
import ConversionComponent from "./ConversionComponent";

function ReferenceContainer() {
  return (
    <div>
      <ReferenceNavBarComponent />
      <div className="row m-auto">
        <ConversionComponent />
      </div>
    </div>
  );
}

export default ReferenceContainer;
