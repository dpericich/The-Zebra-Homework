import "./App.css";
import priceComparisonData from "./carrier_cards.json";
import Button from "./components/button/Button";

// Store the Carrier in it's own variable for easier manipulation
const carrier_cards = priceComparisonData.carrier_cards;

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {carrier_cards.map((carrierOption) => (
        <div>{carrierOption.name}</div>
      ))}
      <Button text="Hello" type={0} />
    </div>
  );
}

export default App;
