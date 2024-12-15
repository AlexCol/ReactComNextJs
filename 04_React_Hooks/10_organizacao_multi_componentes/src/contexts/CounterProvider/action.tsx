import { CounterActions, CounterActionTypes } from "./types";

export const incrementCounter = (dispatch: ({ type, payload }: CounterActions) => void) => {
  dispatch({ type: CounterActionTypes.INCREMENT_COUNTER });
}

export const decrementCounter = (dispatch: ({ type, payload }: CounterActions) => void) => {
  dispatch({ type: CounterActionTypes.DECREMENT_COUNTER });
}

