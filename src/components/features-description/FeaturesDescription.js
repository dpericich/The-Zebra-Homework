import React from "react";

const FeaturesDescription = ({ features }) => {
  return (
    <div features-description>
      <div className="features-description__title">Features</div>
      <div
        className="features-description__list"
        dangerouslySetInnerHTML={{ __html: features }}
      />
    </div>
  );
};

export default FeaturesDescription;
