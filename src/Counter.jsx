import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0, incrementImport = 1 }) {
  const [counter, setCount] = useState(initialValue);

  function handleCounterIncrement() {
    setCount((c) => c + incrementImport);
  }
  function handleCounterReset() {
    setCount(initialValue);
  }
  function handleCounterDecrement() {
    setCount((c) => c - incrementImport);
  }
  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterReset}>Reset</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
    </div>
  );
}
