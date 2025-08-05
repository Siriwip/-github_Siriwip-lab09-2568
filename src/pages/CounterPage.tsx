import { useState } from "react";

export default function CounterPage() {
   const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="text-center mt-5">
      <h2>Counter: {count}</h2>
      <button className="btn btn-primary" onClick={increase}>
        Increase
      </button>
    </div>
  );}