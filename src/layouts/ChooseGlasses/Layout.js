import React, { useState } from "react";
import Glasses from "./Glasses";
import Item from "./Item";
import styleLayout from "./Layout.module.css";
import stylesItem from "./Item.module.css";

const Layout = () => {
  const [state, setState] = useState({
    price: 30,
    name: "GUCCI G8850U",
    url: "/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  });
  const handleClick = (index) => {
    setState((prevState) => {
      return {
        price: index.price,
        name: index.name,
        url: index.url,
        desc: index.desc,
      };
    });
  };
  // console.log(state);
  return (
    <div
      className={styleLayout.main}
      style={{
        background: "url(/glassesImage/background.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styleLayout.navbar}>
        <h1 className={styleLayout.title}>Try glasses app online</h1>
      </div>
      <div className={stylesItem.item__list}>
        <div className={stylesItem.item__container}>
          <Item>
            <div className={stylesItem.item__style}>
              <img
                src={state.url}
                alt="images"
                className={stylesItem.item__style_img}
              />
            </div>
            <div className={stylesItem.item__text}>
              <h4 className={stylesItem.item__name}>{state.name}</h4>
              <p className={stylesItem.item__desc}>{state.desc}</p>
              <span className={stylesItem.item__price}>
                Price: {state.price} $
              </span>
            </div>
          </Item>
          <Item></Item>
        </div>
        <Glasses onClick={handleClick}></Glasses>
      </div>
    </div>
  );
};

export default Layout;
