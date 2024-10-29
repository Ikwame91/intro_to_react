import Conditional from "./components/Conditional";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";

function App() {
  const seatNumbers = [1, 4, 7];

  return (
    <div className="App">
      <Hello name="Kwame Json" message="Hi there mf!" />
      <Hello name="Tom" message="Hello" emoji="👋" seatNumbers={seatNumbers} />
      <Fruits />
      <Conditional />
    </div>
  );
}

export default App;
