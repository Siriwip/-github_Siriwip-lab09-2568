import { useState } from "react";

export default function CounterPage() {
   const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="text-center mt-5">
      <h2>Counter Page</h2>
      <p className="fs-6 my-3">Counter: {count}</p>
      <button className="btn btn-primary" onClick={increase}>
        Increase
      </button>
    </div>
  );}