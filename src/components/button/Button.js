import React from "react";
// SVG files for the different logos
import Bolt from "../../assets/IconBoltWhite.png";
import Arrow from "../../assets/IconArrowDown.png";

const Button = ({ text, type, link }) => {
  // Determine which icon to load based on the type passed in
  let logo;
  if (Number(type) === 0 || Number(type) === 1) {
    logo = Arrow;
  } else if (Number(type) === 2) {
    logo = null;
  } else if (Number(type) === 3) {
    logo = Bolt;
    text = "Buy Now";
  }

  let color;
  if (type === 0 || type === 1) {
    color = "blue";
  } else if (type === 3) {
    color = "orange";
  } else {
    color = "";
  }

  if (type !== 2) {
    return (
      <div className={`button button__${color}`}>
        <a href={link} className="button__link">
          <img src={logo} alt="quote button" className="button__logo" />
          <div className="button__text">{text || null}</div>
        </a>
      </div>
    );
  } else {
    return null;
  }
};

export default Button;
