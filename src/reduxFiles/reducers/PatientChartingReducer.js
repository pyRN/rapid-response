import {} from "../actions/types";

/*Example state
    {      
    }
*/

const initialState = {};

export default function PatientChartingState(state = initialState, action) {
  switch (action.type) {
    case "Case 1":
      console.log(state);
      return { ...state };
    case "Case 2":
      console.log(state);
      return { ...state };

    default:
      return state;
  }
}
