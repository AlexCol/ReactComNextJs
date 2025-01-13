import { useCounterContext } from "../../contexts/CounterContext"

function Heading() {
  const { counterState } = useCounterContext();
  return (
    <>
      <div>Heading Home</div>
      <p>Counter: {counterState.counter}</p>
    </>
  )
}

export default Heading