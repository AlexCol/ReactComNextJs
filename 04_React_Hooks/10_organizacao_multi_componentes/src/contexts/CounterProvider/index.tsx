import { ReactNode, useReducer } from "react";
import { CounterContext } from "./context";
import { data } from "./data";
import { reducer } from "./reducer";

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [counterState, counterDispatch] = useReducer(reducer, data);

  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
}