import React from "react";
import NameContainerDisplay from "../name-container-display/NameContainerDisplay";
import carrierLogo from "./../../assets/logo-carrier-sm-default.png";

const NameContainer = ({ name, stars, features }) => {
  return (
    <div className="name-container">
      <img src={carrierLogo} alt="carrier photo" className="carrier-image" />
      <NameContainerDisplay name={name} stars={stars} features={features} />
    </div>
  );
};

export default NameContainer;
