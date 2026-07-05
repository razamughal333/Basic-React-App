function Greetings({ name, age }) {
  return (
    <h2>
      Greetings, {name}, age is {age}
    </h2>
  );
}

function App() {
  return (
    <>
      <h1>Hello, Raza!</h1>
      <p>This is my first React component.</p>

      <Greetings name="Raza" age={22} />
      <Greetings name="Ali" age={12} />
    </>
  );
}
export default App;
