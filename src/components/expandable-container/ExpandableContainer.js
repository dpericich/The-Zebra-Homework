import React from "react";
import FeaturesDescription from "../features-description/FeaturesDescription";
import InsuranceDescription from "../insurance-description/InsuranceDescription";

const ExpandableContainer = ({ features, name, details }) => {
  return (
    <div className="expandable-container">
      <FeaturesDescription features={features} />
      <InsuranceDescription name={name} details={details} />
    </div>
  );
};

export default ExpandableContainer;
