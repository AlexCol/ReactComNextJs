import { useEffect, useState } from 'react';
import './App.css';

const eventFn = () => {
  console.log('Clicou no h1');
}

function App() {
  const [counter, setCounter] = useState(0);

  //sem array de dependencia, executa sempre que o componente for renderizado
  useEffect(() => {
    console.log('Componente renderizado');
  });

  //sem dependencia, executa apenas uma vez
  useEffect(() => {
    //posso adicionar eventos dinamicamente com useEffect
    document.querySelector('h1')?.addEventListener('click', eventFn);
    console.log('Componente montado');

    //retorna uma função que é executada quando o componente é desmontado
    return () => {
      //! pra evitar adicionar mais de um evento, é importante remover o evento no return
      document.querySelector('h1')?.removeEventListener('click', eventFn);
      console.log('Componentes desmontado');
    }
  }, []);

  //com dependencia, disparada sempre que counter for alterado
  useEffect(() => {
    console.log('Counter alterado para: ', counter);
  }, [counter]); //! importante: não se deve alterar o estado de itens no array de dependencias dentro do useEffect, pois pode causar um loop infinito

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}

export default App;
