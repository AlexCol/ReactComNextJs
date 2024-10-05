import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [reverse, setReverse] = React.useState(false);
  const [counter, setCounter] = React.useState(0);

  const handleReverse = () => {
    setReverse(!reverse);
  }

  const handleCounter = (value: number) => {
    setCounter((prevCounter) => prevCounter + value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverse ? "reverse" : ""}`} alt="logo" />
        <button onClick={handleReverse}>
          {reverse ? "Go Normal" : "Go Reverse"}
        </button>

        <h1>Contador: {counter}</h1>
        <button onClick={() => handleCounter(1)}>Increment</button>
        <button onClick={() => handleCounter(-1)}>Decrement</button>

        <h1></h1>

      </header>

    </div>
  );
}

export default App;
