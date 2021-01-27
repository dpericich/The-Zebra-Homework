import React from "react";

const InsuranceDescription = () => {
  return (
    <div className="insurance-description">
      <h2 className="insurance-description__title">Why Liberty Mutual</h2>
      <div className="insurance-description__details">
        <div className="insurance-description__text">
          Some details about the insurance
        </div>
        <div className="insurance-description__disclaimer">
          Price shown is a soft quote based on the Liberty Mutual insurance
          product in your state
        </div>
      </div>
    </div>
  );
};

export default InsuranceDescription;
