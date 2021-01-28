import React from "react";
import Rate from "../rate/Rate";
import Button from "../button/Button";

const PriceContainer = ({ tag, rate, type, actionText, actionLink }) => {
  return (
    <div className="price-container">
      <div className="price-container__price">
        <div className="price-container__price--verified">{tag || null}</div>
        <div className="price-container__price--rate">
          {rate ? <Rate rate={rate} /> : null}
        </div>
      </div>
      <Button type={type} text={actionText} link={actionLink} />
    </div>
  );
};

export default PriceContainer;
