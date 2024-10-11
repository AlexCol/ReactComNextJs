import { useCallback, useMemo, useState } from 'react';
import './App.css';
import ButtonComponent from './ButtonComponent';

function AppExemplo03ComUseMemo() {
  const [counter, setCounter] = useState(0); // Estado para o contador  

  const increment = useCallback((num: number) => {
    setCounter((prevState) => prevState + num);
  }, []);

  const Button = useMemo(() => {
    return <ButtonComponent onClickCustm={increment} />
  }, [increment]);

  console.log('App renderizado');
  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => increment(-1)}>Decrement</button>
      {Button}
    </div>
  );
}

export default AppExemplo03ComUseMemo;
