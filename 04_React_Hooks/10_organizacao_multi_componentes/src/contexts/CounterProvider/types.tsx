import { Dispatch } from "react";

export enum CounterActionTypes { //tipagem dos tipos de ações
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
  DECREMENT_COUNTER = 'DECREMENT_COUNTER',
}

// export interface Counter { //tipagem do meu objeto a ser manipulado no estado
//   value: number;
// }

export interface CounterActions { //tipagem das ações
  type: CounterActionTypes;
  payload?: number;
}

export interface CounterState { //tipagem do meu estado
  counter: number;
}

export interface PostsContextType { //tipagem do meu contexto que será usado pela aplicação
  counterState: CounterState;
  counterDispatch: Dispatch<CounterActions>;
}