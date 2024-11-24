import { useContext } from "react";
import { GlobalContext } from "../contexts/AppContext";

const Btn = () => {
  const theContext = useContext(GlobalContext);
  const { setContextState } = theContext;
  return (
    <button onClick={() => setContextState((s: any) => ({ ...s, counter: s.counter + 1 }))}>
      Clique para aumentar o contador
    </button>
  )
}

export default Btn;