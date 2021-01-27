import React from "react";
// SVG files for the different logos
import Bolt from "../../assets/IconBoltWhite.svg";
import Arrow from "../../assets/IconArrowDown.svg";

const Button = ({ text, type, link }) => {
  // Determine which icon to load based on the type passed in
  let logo;
  if (Number(type) === 0 || Number(type) === 1) {
    import(`../../assets/IconArrowDown.svg`);
  } else if (Number(type) === 2) {
    logo = null;
  } else if (Number(type) === 3) {
    logo = import(`../../assets/IconBoltWhite.svg`);
  }

  return (
    <div className={`button button__${type}`}>
      {logo}
      <div className="button__text">{text}</div>
    </div>
  );
};

export default Button;
