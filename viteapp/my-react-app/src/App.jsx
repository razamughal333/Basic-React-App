import Card from "./components/Card";
import Game from "./Game";

const ali = {
  age: 133333,
};

function App() {
  return (
    <>
      <h1> helloooo {ali.age}</h1>
      <br />
      <br />
      <br />
      <Game />
      <br />
      <br />
      <br />

      <Card userName="raza ahmed" btnText="click me" />
      <Card userName="raza jjj" />
    </>
  );
}
export default App;
