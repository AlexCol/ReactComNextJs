import { useContext } from 'react';
import './App.css'
import { AppGlobalContext } from './contexts/AppGlobalContext';

function App() {
  const context = useContext(AppGlobalContext); //impressindivel para usar o contexto global que o mesmo tenha sido criado num arquivo acima (no caso aqui, adicionado a main)
  return (
    <div className="App">
      <h1>App</h1>
      <h2>{context.state.title}</h2>
      <h3>{context.state.body}</h3>
      <h4>{context.state.counter}</h4>
      <button onClick={() => context.dispatch({ type: 'counterup' })}>Change</button>
    </div>
  )
}

export default App;