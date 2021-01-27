import "./App.css";
import priceComparisonData from "./carrier_cards.json";
import Button from "./components/button/Button";
import ExpandableContainer from "./components/expandable-container/ExpandableContainer";

// Store the Carrier in it's own variable for easier manipulation
const carrier_cards = priceComparisonData.carrier_cards;

function App() {
  return (
    <div className="App">
      {carrier_cards.map((carrierOption) => (
        <div key={carrierOption.name}>
          <ExpandableContainer
            features={carrierOption.features_html}
            name={carrierOption.name}
            details={carrierOption.detail_body}
          />
        </div>
      ))}
      <Button text="Hello" type={0} />
    </div>
  );
}

export default App;
