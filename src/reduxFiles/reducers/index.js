import { combineReducers } from "redux";

//Reducers
import CodeBlueReducer from "./CodeBlueReducer";
import LogReducer from "./LogReducer";
import PatientChartingReducer from "./PatientChartingReducer";
import StrokeAlertReducer from "./StrokeAlertReducer";

const rootReducer = combineReducers({
  oCodeBlueReducer: CodeBlueReducer,
  oLogReducer: LogReducer,
  oPatientChartingReducer: PatientChartingReducer,
  oStrokeAlertReducer: StrokeAlertReducer
});

export default rootReducer;
