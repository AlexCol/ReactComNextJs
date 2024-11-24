import React, { useContext, useState } from 'react';
import './App.css'

function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  )
}

export default App

/* componentes q seriam em outros arquivos */

//componente Global (seria outro arquivo)
//! deixado como any para simplificar, mas como usaria useState, precisaria de uma interface ContextState para tipar os dados 
//! e GlobalContextType para criar uma interface com ContextState e setContextState do tipo Dispatch<SetStateAction<ContextState>>
//! pra nom fim usar GlobalContextType ao criar o Context
const globalState: any = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0
}
const GlobalContext = React.createContext(globalState);

//componente DIV (seria outro arquivo)
const Div = () => {
  return (
    <div className='App'>
      <>
        <H1 />
        <P />
        <Btn />
      </>
    </div>
  )
}

//componente H1 (seria outro arquivo)
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const { contextState } = theContext;
  return (
    <h1>{contextState.title} - {contextState.counter}</h1>
  )
}

//componente P (seria outro arquivo)
const P = () => {
  const theContext = useContext(GlobalContext);
  const { contextState } = theContext;
  return (
    <p>{contextState.body}</p>
  )
}

//componente Btn (seria outro arquivo)
const Btn = () => {
  const theContext = useContext(GlobalContext);
  const { setContextState } = theContext;
  return (
    <button onClick={() => setContextState((s: any) => ({ ...s, counter: s.counter + 1 }))}>
      Clique para aumentar o contador
    </button>
  )
}