import { inicialState } from ".";
import { CounterActions, CounterActionTypes, CounterState } from "./actionTypes";

export const reducer = (state: CounterState, action: CounterActions): CounterState => {
  console.log(action);

  switch (action.type) {
    case CounterActionTypes.INCREASE:
      return { ...state, counter: state.counter + 1 };
    case CounterActionTypes.DECREASE:
      return { ...state, counter: state.counter - 1 };
    case CounterActionTypes.RESET:
      return { ...inicialState };
    case CounterActionTypes.SET_COUNTER:
      return { ...state, counter: action.payload || 0 };

    case CounterActionTypes.ASYNC_INCREASE_START:
      return { ...state, loading: true };
    case CounterActionTypes.ASYNC_INCREASE_END:
      return { ...state, counter: state.counter + 1, loading: false };
    case CounterActionTypes.ASYNC_INCREASE_ERROR:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}