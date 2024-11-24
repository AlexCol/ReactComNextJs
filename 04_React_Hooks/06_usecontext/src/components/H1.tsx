import { useContext } from "react";
import { GlobalContext } from "../contexts/AppContext";

const H1 = () => {
  const theContext = useContext(GlobalContext);
  const { contextState } = theContext;
  return (
    <h1>{contextState.title} - {contextState.counter}</h1>
  )
}

export default H1;