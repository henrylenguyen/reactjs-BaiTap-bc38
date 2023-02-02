import React from "react";
import styleGlasses from "./Glasses.module.css";
import { Data } from "./Data.js";
import Button from "./Button";

const Glasses = (props) => {

  return (
    <div className={styleGlasses.glasses}>
      {/* Nhấn vào mỗi nút thì sẽ nhận tương ứng với giá trị id của nó */}
      {Data.map((item, index) => (
        <Button
          key={item.id}
          image={item.url}
          onClick={() => {
            props.onClick(item);
          }}
        ></Button>
      ))}
    </div>
  );
};

export default Glasses;
