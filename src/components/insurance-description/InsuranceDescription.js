import React from "react";

const InsuranceDescription = ({ name, details }) => {
  return (
    <div className="insurance-description">
      <div className="insurance-description__title">Why {name}?</div>
      <div className="insurance-description__details">
        <div className="insurance-description__text">{details}</div>
        <div className="insurance-description__disclaimer">
          Price shown is a soft quote based on the {name} insurance product in
          your state.
        </div>
      </div>
    </div>
  );
};

export default InsuranceDescription;
