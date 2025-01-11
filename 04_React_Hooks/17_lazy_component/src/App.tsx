import { lazy, Suspense, useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  const loadLazyComponent = () => {
    console.log("Load chamado... Com compomente já importado uma vez, o import não é executado novamente.");
    return import('./LazyComponent');
  }
  const LazyComponent = lazy(loadLazyComponent);

  return (
    <>
      <button
        onMouseOver={loadLazyComponent}
        onClick={() => setShow(!show)}
      >Show Lazy - {show ? "On" : "Off"}</button>
      <Suspense fallback={<div>Carregando...</div>}>
        {show && <LazyComponent />}
      </Suspense>
    </>
  );
}

export default App;
