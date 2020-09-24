import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import StrokeMainComponent from "./StrokeMainComponent";
import StrokeNavBarComponent from "./StrokeNavBarComponent";
// import TimerNavBarComponent from "./TimerNavBarComponent";

function StrokeAlertContainer() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <StrokeNavBarComponent />
      {/* <TimerNavBarComponent /> */}
      <div>
        <Router>
          <Route
            path="/strokeAlert"
            exact
            render={(props) => <StrokeMainComponent />}
          />
          {/* <Route
          path="/codeBlueLog"
          exact
          render={props => <PatientChartContainer />}
        />
        <Route
          path="/codeBlueTeam"
          exact
          render={props => <StrokeAlertContainer />}
        />
        <Route path="/codeBlueProcedures" exact render={props => <CodeBlueContainer />} />
        <Route
          path="/codeBlueMedications"
          exact
          render={props => <ResourcesContainer />}
        />
        <Route
          path="/codeBlueResources"
          exact
          render={props => <ResourcesContainer />}
        /> */}
        </Router>
      </div>
    </div>
  );
}

export default StrokeAlertContainer;
