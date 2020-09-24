import React from "react";

//Components
import CodeMainComponent from "./CodeMainComponent";
import CodeNavBarComponent from "./CodeNavBarComponent";

function CodeBlueContainer() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <CodeNavBarComponent />
      <CodeMainComponent />
    </div>
  );
}

export default CodeBlueContainer;
