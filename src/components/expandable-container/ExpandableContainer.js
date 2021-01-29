import React, { useState } from "react";
import FeaturesDescription from "../features-description/FeaturesDescription";
import InsuranceDescription from "../insurance-description/InsuranceDescription";

const ExpandableContainer = ({ features, name, details }) => {
  const [isSectionOpen, setIsSectionOpen] = useState(true);
  return (
    <div className="expandable-container">
      <div
        className={`expandable-container__items ${
          isSectionOpen ? "expandable-container__hidden" : null
        }`}
      >
        <FeaturesDescription features={features} />
        <InsuranceDescription name={name} details={details} />
      </div>
      <div
        className="expandable-container__expand"
        onClick={() => setIsSectionOpen((isSectionOpen) => !isSectionOpen)}
      >
        {isSectionOpen ? (
          <ion-icon name="chevron-down-outline"></ion-icon>
        ) : (
          <ion-icon name="chevron-up-outline"></ion-icon>
        )}
      </div>
    </div>
  );
};

export default ExpandableContainer;
