import { Dispatch } from "react";

const prefix = 'CounterContext';

export interface CounterState {
  counter: number;
  loading: boolean;
}

export enum CounterActionTypes {
  INCREASE = `${prefix}/INCREASE`,
  DECREASE = `${prefix}/DECREASE`,
  RESET = `${prefix}/RESET`,
  SET_COUNTER = `${prefix}/SET_COUNTER`,
  ASYNC_INCREASE_START = `${prefix}/ASYNC_INCREASE_START`,
  ASYNC_INCREASE_END = `${prefix}/ASYNC_INCREASE_END`,
  ASYNC_INCREASE_ERROR = `${prefix}/ASYNC_INCREASE_ERROR`
}

export interface CounterActions { //tipagem das ações
  type: CounterActionTypes;
  payload?: number;
}

export interface CounterContextType { //tipagem do meu contexto que será usado pela aplicação
  counterState: CounterState;
  counterDispatch: Dispatch<CounterActions>
}

