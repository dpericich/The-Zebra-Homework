import "./App.css";
import priceComparisonData from "./carrier_cards.json";
import Button from "./components/button/Button";
import ExpandableContainer from "./components/expandable-container/ExpandableContainer";
import NameContainer from "./components/name-container/NameContainer";

// Store the Carrier in it's own variable for easier manipulation
const carrier_cards = priceComparisonData.carrier_cards;

function App() {
  return (
    <div className="App">
      <div className="quote-container">
        {carrier_cards.map((carrierOption) => (
          <div className="quote-container__quote" key={carrierOption.name}>
            <NameContainer
              name={carrierOption.name}
              features={carrierOption.features}
              stars={carrierOption.stars}
            />
            <ExpandableContainer
              features={carrierOption.features_html}
              name={carrierOption.name}
              details={carrierOption.detail_body}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
