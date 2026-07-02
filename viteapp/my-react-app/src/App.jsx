import { useState } from "react";

function Greetings({ name, age }) {
  return (
    <h2>
      greetings, {name}, age is {age}
    </h2>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello, Raza!</h1>
      <p>This is my first React component.</p>
      <Greetings name="Raza" age="22" />
      <Greetings name="Ali" age="12" />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <br />
      <h3>Count: {count}</h3>
    </>
  );
}

export default App;
