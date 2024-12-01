import { Dispatch } from "react";

// Estado global
export interface IGlobalState {
  title: string;
  body: string;
  counter: number;
}

// Ações do reducer
export type IGlobalAction =
  | { type: "change" }
  | { type: "return" }
  | { type: "counterup" }
  | { type: "counterdown" }
  | { type: "update"; payload?: string };

// Contexto global
export interface IGlobalContextProps {
  state: IGlobalState;
  dispatch: Dispatch<IGlobalAction>;
}
