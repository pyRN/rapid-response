import {
  SET_CPR_TIME_STATE,
  SET_CODE_LOG_STATE,
  SET_CODE_NAV_STATE,
  Set_CODE_TIME,
  SET_CODE_TIMER_STATE
} from "../actions/types";

const initialState = {
  bCodeStart: false,
  oCodeTime: {
    sCodeHours: "00",
    sCodeMinutes: "00",
    sCodeSeconds: "00"
  },
  oCprTime: {
    bCprInProgress: false,
    sCprMinutes: "00",
    sCprSeconds: "00"
  },
  aCodeLog: []
};

export default function CodeBlueState(state = initialState, action) {
  switch (action.type) {
    case "SET_CPR_TIME_STATE":
      return {
        ...state,
        oCprTime: {
          bCprInProgress: action.payload.bCprInProgress,
          sCprMinutes: action.payload.sCprMinutes,
          sCprSeconds: action.payload.sCprSeconds
        }
      };
    case "SET_CODE_LOG_STATE":
      let aNewCodeLog = [...state.aCodeLog];
      aNewCodeLog.push({
        sEvent: action.payload.sEvent,
        sEventInfo: action.payload.sEventInfo,
        tEventTime: new Date().toLocaleTimeString("en-GB")
      });
      return { ...state, aCodeLog: aNewCodeLog };
    case "SET_CODE_TIME":
      return {
        ...state,
        oCodeTime: {
          sCodeHours: action.payload.sCodeHours,
          sCodeMinutes: action.payload.sCodeMinutes,
          sCodeSeconds: action.payload.sCodeSeconds
        }
      };
    case "SET_CODE_TIMER_STATE":
      return { ...state, bCodeStart: action.payload.bCodeStart };
    default:
      return state;
  }
}
