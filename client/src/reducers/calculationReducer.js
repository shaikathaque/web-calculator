import { ADD_CALCULATION, FETCH_CALCULATIONS } from "../actions/types";

const initialState = {
  previousCalculations: [
    {
      label: "1",
      firstNum: "1",
      secondNum: "1",
      operation: "+",
      result: "2"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CALCULATION:
      return action.payload;
    default:
      return state;
  }
}
