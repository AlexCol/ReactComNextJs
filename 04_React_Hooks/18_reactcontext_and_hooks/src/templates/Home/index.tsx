import Button from "../../components/Button";
import Heading from "../../components/Heading";
import { useCounterContext } from "../../contexts/CounterContext"
import { CounterActionTypes } from "../../contexts/CounterContext/actionTypes";

function Home() {
  const { counterDispatch } = useCounterContext();

  return (
    <>
      <Heading />
      <Button onButtonClick={() => counterDispatch({ type: CounterActionTypes.INCREASE })}>Increase</Button>
      <Button onButtonClick={() => counterDispatch({ type: CounterActionTypes.DECREASE })}>Decrease</Button>
      <Button onButtonClick={() => counterDispatch({ type: CounterActionTypes.SET_COUNTER, payload: 10 })}>Set 10</Button>
      <Button onButtonClick={() => counterDispatch({ type: CounterActionTypes.RESET })}>Reset</Button>
    </>
  )
}

export default Home