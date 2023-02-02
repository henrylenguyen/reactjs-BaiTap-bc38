import React from "react";
import styleGlasses from "./Glasses.module.css";
const Button = (props) => {
  // console.log(props);
  return (
    <button className={styleGlasses.glasses__button}>
      <img
        src={props.image}
        alt=""
        className={styleGlasses.button__image}
        onClick={props.onClick}
      />
    </button>
  );
};

export default Button;
