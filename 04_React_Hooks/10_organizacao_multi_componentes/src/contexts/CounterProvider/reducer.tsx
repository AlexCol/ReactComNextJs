import { CounterActions, CounterActionTypes, CounterState } from "./types";

export const reducer = (state: CounterState, action: CounterActions): CounterState => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case CounterActionTypes.DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
    default:
      return { ...state };
  }
}