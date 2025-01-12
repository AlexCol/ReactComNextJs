import { useCounterContext } from "../../contexts/CounterContext"
import { CounterActionTypes } from "../../contexts/CounterContext/actionTypes";

function Home() {
  const { counterState, counterDispatch } = useCounterContext();

  return (
    <>
      <div>Home</div>
      <p>Counter: {counterState.counter}</p>
      <button onClick={() => counterDispatch({ type: CounterActionTypes.INCREASE })}>Increase</button>
      <button onClick={() => counterDispatch({ type: CounterActionTypes.DECREASE })}>Decrease</button>
    </>
  )
}

export default Home