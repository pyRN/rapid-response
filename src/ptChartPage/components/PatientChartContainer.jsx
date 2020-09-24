import React from "react";

//Components
import CardiacComponent from "./CardiacComponent";
import FooterComponent from "./FooterComponent";
import GastroIntComponent from "./GastroIntComponent";
import GenitoUroComponent from "./GenitoUroComponent";
import IntegumentaryComponent from "./IntegumentaryComponent";
import NavBarComponent from "./NavBarComponent";
import NeuroComponent from "./NeuroComponent";
import NoteComponent from "./NoteComponent";
import PsychComponent from "./PsychComponent";
import RespiratoryComponent from "./RespiratoryComponent";
import TriageComponent from "./TriageComponent";
import VitalsComponet from "./VitalsComponent";

function PatientChartContainer() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <NavBarComponent />
      <div>
        <div className="row m-auto">
          <TriageComponent />
          <VitalsComponet />
          <NeuroComponent />
          <RespiratoryComponent />
          <CardiacComponent />
        </div>
        <div className="row m-auto">
          <GenitoUroComponent />
          <GastroIntComponent />
          <IntegumentaryComponent />
          <PsychComponent />
          <NoteComponent />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default PatientChartContainer;
