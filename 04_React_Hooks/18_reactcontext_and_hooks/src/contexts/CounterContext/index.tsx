import { createContext, ReactNode, useContext, useReducer } from "react";
import { CounterContextType, CounterState } from "./actionTypes";
import { reducer } from "./reducer";

export const inicialState: CounterState = {
  counter: 0,
  loading: false
}

const Context = createContext<CounterContextType | undefined>(undefined);

export const CounterContextProvider = ({ children }: { children: ReactNode }) => {
  const [counterState, counterDispatch] = useReducer(reducer, inicialState);

  return (
    <Context.Provider value={{ counterState, counterDispatch }}>
      {children}
    </Context.Provider>
  );
}

export const useCounterContext = () => {
  const contexto = useContext(Context); //assim, basta importar e chamar essa função para ter acesso ao contexto, e consigo controlar e passar possiveis erros

  console.log(contexto);
  if (!contexto) {
    throw new Error('To use useCounterContext, this component must be inside <CounterContextProvider />');
  }

  return { ...contexto };
}