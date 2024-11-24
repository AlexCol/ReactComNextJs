import { useContext } from "react";
import { GlobalContext } from "../contexts/AppContext";

const P = () => {
  const theContext = useContext(GlobalContext);
  const { contextState } = theContext;

  console.log("redenrizou P");

  return (
    <p>{contextState.body}</p>
  )
}

export default P;