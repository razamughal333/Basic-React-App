import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          if (count < 10) {
            setCount(count + 1);
          }
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrease
      </button>
      <br />
      <h3>Count: {count}</h3>
    </>
  );
}

export default Counter;
