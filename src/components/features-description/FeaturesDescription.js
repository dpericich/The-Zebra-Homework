import React from "react";

const FeaturesDescription = ({ features }) => {
  console.log(features);
  return (
    <div className="features-description">
      <div className="features-description__title">
        <ion-icon name="list-outline"></ion-icon>Features
      </div>
      {features ? (
        <div
          className="features-description__list"
          dangerouslySetInnerHTML={{ __html: features }}
        />
      ) : (
        <div className="features-description__list">
          No features at this time
        </div>
      )}
    </div>
  );
};

export default FeaturesDescription;
