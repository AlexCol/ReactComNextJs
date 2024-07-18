import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState<string>('Alexandre');
  const [count, setCount] = useState(0);

  const mudaNome = () => {
    setName(name === 'Alexandre' ? 'Bernard' : 'Alexandre');
  }

  useEffect(() => {
    //const timer = setInterval(() => {
    const timer = setTimeout(() => {
      //setCount(count + 1); //!usar assim não atualiza o count (ou volta pra 1) mesmo com setInterval, coloquei o por que abaixo
      setCount((prevCount) => prevCount + 1);
      console.log('disparou timer');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{count}</h1>
        <p onClick={mudaNome /*forma mais facil, só precisaria fazer "() => mudaNome()" apenas se tiver parametro no mudaNome */}>
          {name}
        </p>
        <p onClick={() => setCount(count + 1)}>Aumenta count</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/*
No seu exemplo, o motivo pelo qual o console.log continua sendo disparado, mas o contador não é atualizado, está relacionado ao comportamento do useEffect e ao fechamento (closure) das variáveis dentro do setInterval.

Problema com o Closure
Quando o useEffect é executado pela primeira vez, ele cria um intervalo (setInterval) que usa o valor de count no momento da criação do intervalo. Como o count não é incluído nas dependências do useEffect, esse valor nunca é atualizado dentro do intervalo, e ele continua a usar o valor inicial de count que era 0.

Solução
Para resolver esse problema, você pode adicionar count como uma dependência do useEffect. Isso garantirá que um novo intervalo seja configurado sempre que count for atualizado, permitindo que o valor mais recente de count seja usado.

Outra abordagem é usar a função de atualização de estado fornecida por setState, que permite acessar o estado mais recente dentro do setInterval.

*/