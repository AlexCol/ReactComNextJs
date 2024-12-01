import { useEffect, useRef, useState } from 'react';
import './App.css'

const useMyHook = (callBack: () => void, delay = 1000) => {
  const savedCB = useRef(callBack);

  // Sincroniza `callBack` com `savedCB.current` sempre que `callBack` mudar´
  useEffect(() => {
    savedCB.current = callBack;
  }, [callBack]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCB.current(); // Garante que o callback mais recente é chamado
    }, delay);

    return () => {
      clearInterval(interval);
    }
  }, [delay]); // Muda apenas se `delay` mudar
}

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter(counter + 1), delay);

  return (
    <div className="App">
      <h1>App</h1>
      <h2>Counter: {counter}</h2>
      <h2>Delay: {delay}</h2>

      <button onClick={() => setDelay((d) => d + incrementor)}>+{incrementor}</button>
      <button onClick={() => setDelay((d) => d - incrementor)}>-{incrementor}</button>

      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))} />
    </div>
  )
}

export default App;