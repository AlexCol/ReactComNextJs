import { useReducer } from 'react';
import './App.css'

interface IGlobalState {
  title: string;
  body: string;
  counter: number;
}

const initialState: IGlobalState = {
  title: 'Título do contexto',
  body: 'Body do contexto',
  counter: 0,
}

/*
type: usado para identificar a ação que será executada
payload: usado para passar informações adicionais para a ação
*/
function globalReducer(state: IGlobalState, action: { type: string, payload?: string }) {
  console.log('state', state, 'action', action);
  // if (action.type === 'change') {
  //   return { ...state, title: 'Novo título' };
  // } else if (action.type === 'return') {
  //   return { ...state, title: 'Título do contexto' };
  // } else if (action.type === 'counterup') {
  //   return { ...state, counter: state.counter + 1 };
  // } else if (action.type === 'counterdown') {
  //   return { ...state, counter: state.counter - 1 };
  // }
  switch (action.type) {
    case 'change':
      return { ...state, title: 'Novo título' };
    case 'return':
      return { ...state, title: 'Título do contexto' };
    case 'counterup':
      return { ...state, counter: state.counter + 1 };
    case 'counterdown':
      return { ...state, counter: state.counter - 1 };
    case 'update':
      return { ...state, title: action.payload || 'Título vazio' };
    default:
      return { ...state };
  }
}

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <div className="App">
      <h1>{state.title}</h1>
      <h2>{state.counter}</h2>
      <h3>Todos os componentes abaixo passam pelo menos 'useReducer'</h3>
      <button onClick={() => dispatch({ type: 'change' })}>Muda para Novo Título</button>
      <button onClick={() => dispatch({ type: 'return' })}>Muda para Título do contexto</button>
      <br />
      <button onClick={() => dispatch({ type: 'counterup' })}>Counter Up</button>
      <button onClick={() => dispatch({ type: 'counterdown' })}>Counter Down</button>
      <br />
      <input type="text" onChange={(e) => dispatch({ type: 'update', payload: e.target.value })} />
    </div>
  )
}

export default App;