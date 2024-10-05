import { useCallback, useState } from 'react';
import './App.css';
import React from 'react';
import ButtonComponent from './ButtonComponent';

// Importando ButtonComponent com React.memo para evitar renderizações desnecessárias
// React.memo memoriza o componente e só o renderiza se as props mudarem
const Button = React.memo(ButtonComponent);

function App() {
  const [counter, setCounter] = useState(0); // Estado para o contador

  // useCallback memoriza a função `increment` para evitar recriações em cada renderização
  // A dependência `[]` significa que a função será recriada apenas uma vez (no primeiro render)
  const increment = useCallback((num: number) => {
    setCounter((prevState) => prevState + num);
  }, []);

  console.log('App renderizado');
  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => increment(-1)}>Decrement</button>
      <Button onClickCustm={increment} />
    </div>
  );
}

export default App;
