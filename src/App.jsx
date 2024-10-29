import Conditional from "./components/Conditional";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  const seatNumbers = [1, 4, 7];

  return (
    <div className="App">
      <Hello name="Kwame Json" message="Hi there mf!" />
      <Hello name="Tom" message="Hello" emoji="👋" seatNumbers={seatNumbers} />
      <Fruits />
      <Conditional />
      <Message />
      <Counter/>
    </div>
  );
}

export default App;
