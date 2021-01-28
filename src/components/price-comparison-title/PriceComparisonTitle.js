import React from "react";

const PriceComparisonTitle = ({ carrier_cards, sortResults }) => {
  return (
    <>
      <div className="price-comparison-title__header">
        <div className="price-comparison-title__text">
          You just compared{" "}
          <span className="price-comparison-title__text--bold">
            {carrier_cards.length} rates
          </span>{" "}
          in 2 minutes!
        </div>
        <div className="price-comparison-title__filter">
          <div className="price-comparison-title__filter--text">Sort by:</div>
          <select
            className="price-comparison-title__filter--dropdown"
            onChange={sortResults}
          >
            <option>Price</option>
            <option>Rating</option>
            <option>A-Z</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default PriceComparisonTitle;
