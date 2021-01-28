import React from "react";

const Rate = ({ rate }) => {
  return (
    <div className="rate">
      <div className="rate__sign">$</div>
      <div className="rate__rate">{rate.toFixed(2)}</div>
      <div className="rate__month"> / mo</div>
    </div>
  );
};

export default Rate;
