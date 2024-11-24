import React from "react";

export const globalState: any = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0
}

export const GlobalContext = React.createContext(globalState);

interface AppContextProps {
  children: React.ReactNode; // Define a tipagem para children
}

export const AppContext: React.FC<AppContextProps> = ({ children }) => {
  const [contextState, setContextState] = React.useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      {children}
    </GlobalContext.Provider>
  )
}