import { createContext, FC, ReactNode, useReducer } from "react";
import { IGlobalContextProps } from "../types/globalTypes";
import { globalReducer, initialGlobalState } from "../reducers/globalReducer";

// Criação do contexto global
export const AppGlobalContext = createContext<IGlobalContextProps>({
  state: initialGlobalState,
  dispatch: () => { }, // Placeholder para evitar erros fora do Provider
});

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<IAppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialGlobalState);

  return (
    <AppGlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </AppGlobalContext.Provider>
  );
};
