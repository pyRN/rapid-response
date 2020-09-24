import React from "react";

//Components
// import CodeEndComponent from './subcomponents/CodeEndComponent'
import CprComponent from "./CprComponent";
import DefibrillateComponent from "./DefibrillateComponent";
import LogModalComponent from "./LogModalComponent";
import NotesComponent from "./NotesComponent";
import ProceduresComponent from "./ProceduresComponent";
import QuickMedComponent from "./QuickMedComponent";
import IvModalComponent from "./procedureComponents/IvModalComponent";
import IoModalComponent from "./procedureComponents/IoModalComponent";
import IntubateModalComponent from "./procedureComponents/IntubateModalComponent";

const CodeMainComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <CprComponent />
        <DefibrillateComponent />
        <NotesComponent />
      </div>
      <div className="row">
        <QuickMedComponent />
        <ProceduresComponent />
      </div>
      {/* Modals: */}
      <LogModalComponent />
      <IvModalComponent />
      <IoModalComponent />
      <IntubateModalComponent />
    </div>
  );
};

export default CodeMainComponent;
