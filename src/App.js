import React from "react";
import "./App.css";
import priceComparisonData from "./carrier_cards.json";
import ExpandableContainer from "./components/expandable-container/ExpandableContainer";
import NameContainer from "./components/name-container/NameContainer";
import PriceContainer from "./components/price-container/PriceContainer";
import PriceComparisonTitle from "./components/price-comparison-title/PriceComparisonTitle";
import ChevronDown from "./assets/IconChevronDown.png";

// Store the Carrier in it's own variable for easier manipulation
const carrier_cards = priceComparisonData.carrier_cards;

class App extends React.Component {
  state = { quotes: carrier_cards };

  // Based off of dropdown selection, sort items
  sortResults = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Price") {
      const sortedQuotes = this.state.quotes.sort((a, b) => a.rate - b.rate);
      this.setState({ quotes: sortedQuotes });
    } else if (e.target.value === "Rating") {
      const sortedQuotes = this.state.quotes.sort((a, b) => b.stars - a.stars);
      this.setState({ quotes: sortedQuotes });
    } else if (e.target.value === "A-Z") {
      const sortedQuotes = this.state.quotes.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      this.setState({ quotes: sortedQuotes });
    }
  };

  render() {
    return (
      <div className="price-comparison">
        <PriceComparisonTitle
          carrier_cards={this.state.quotes}
          sortResults={this.sortResults}
        />
        <div className="quote-container">
          {this.state.quotes.map((carrierOption) => (
            <div className="quote-container__quote" key={carrierOption.name}>
              <div className="quote-container__quote--visible">
                <NameContainer
                  name={carrierOption.name}
                  features={carrierOption.features}
                  stars={carrierOption.stars}
                />
                <PriceContainer
                  tag={carrierOption.tag}
                  rate={carrierOption.rate}
                  type={carrierOption.type}
                  actionText={carrierOption.action.link_text}
                  actionLink={carrierOption.action.link}
                />
              </div>
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
}

export default App;
