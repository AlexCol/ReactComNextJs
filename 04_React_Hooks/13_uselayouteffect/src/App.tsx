import { MutableRefObject, useLayoutEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4])
  const divRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>

  const handleClick = () => {
    setCounted([...counted, counted.length])
  }

  // useEffect(() => { //ele não espera o html ser renderizado
  //   const now = Date.now();
  //   while (Date.now() < now + 600) {
  //     // Espera 3 segundos
  //     console.log('div', divRef.current.clientHeight);
  //     divRef.current.scrollTop = divRef.current.scrollHeight;
  //   }
  // });

  useLayoutEffect(() => { //ele só executa depois que o html é renderizado (deve ser evitado)
    const now = Date.now();
    while (Date.now() < now + 600) {
      // Espera 3 segundos
      console.log('div', divRef.current.clientHeight);
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  });

  return (
    <>
      <button onClick={handleClick}>
        Count {counted.slice(-1)}
      </button>
      <div
        ref={divRef}
        style={{ height: '100px', width: '150px', overflow: 'scroll' }}
      >
        {counted.map((c) => (
          <div key={c}>{c}</div>
        ))}
      </div>
    </>
  )
}

export default App
