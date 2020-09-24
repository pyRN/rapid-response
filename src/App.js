import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import CodeBlueContainer from "./codeBluePage/components/CodeBlueContainer";
import MainComponent from "./mainPage/components/MainComponent";
import PatientChartContainer from "./ptChartPage/components/PatientChartContainer";
import ReferenceContainer from "./referencePage/components/ReferenceContainer";
import StrokeAlertContainer from "./strokePage/components/StrokeAlertContainer";

export default function App() {
  return (
    <Provider store={store}>
      <div
        className="App"
        style={{ backgroundColor: "black", height: "100vh" }}
      >
        <Router>
          <Route path="/" exact render={(props) => <MainComponent />} />
          <Route
            path="/patientCharting"
            exact
            render={(props) => <PatientChartContainer />}
          />
          <Route
            path="/strokeAlert"
            exact
            render={(props) => <StrokeAlertContainer />}
          />
          <Route
            path="/codeBlue"
            exact
            render={(props) => <CodeBlueContainer />}
          />
          <Route
            path="/resources"
            exact
            render={(props) => <ReferenceContainer />}
          />
        </Router>
      </div>
    </Provider>
  );
}
