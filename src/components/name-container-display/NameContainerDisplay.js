import React from "react";
import goldStar from "./../../assets/IconStarGold.png";
import whiteStar from "./../../assets/IconStarWhite.png";
import icon from "./../../assets/IconFeaturesNonOwner.png";
import icon2 from "./../../assets/IconFeaturesMobile.png";
import {
  calculateRatings,
  displayFeatures,
} from "../../utils/UtilityFunctions";

const NameContainerDisplay = ({ name, stars, features }) => {
  const ratings = calculateRatings(stars, goldStar, whiteStar);
  const stuff = displayFeatures(features);
  console.log(stuff);

  return (
    <div className="name-container-display">
      <div className="name-container-display__title">{name}</div>
      <div className="name-container-display__data">
        <div className="name-container-display__ratings">{ratings}</div>
        <div className="name-container-display__features">{stuff}</div>
      </div>
    </div>
  );
};

export default NameContainerDisplay;
