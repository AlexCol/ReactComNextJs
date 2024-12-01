import { IGlobalAction, IGlobalState } from "../types/globalTypes";

export const initialGlobalState: IGlobalState = {
  title: "Título do contexto",
  body: "Body do contexto",
  counter: 0,
};

export function globalReducer(state: IGlobalState, action: IGlobalAction): IGlobalState {
  switch (action.type) {
    case "change":
      return { ...state, title: "Novo título" };
    case "return":
      return { ...state, title: "Título do contexto" };
    case "counterup":
      return { ...state, counter: state.counter + 1 };
    case "counterdown":
      return { ...state, counter: state.counter - 1 };
    case "update":
      return { ...state, title: action.payload || "Título vazio" };
    default:
      return state;
  }
}
