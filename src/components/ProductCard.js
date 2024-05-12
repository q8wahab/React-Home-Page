import React from "react";

const ProductCard = ({ name, price, img }) => {
  return (
    <div
      style={{
        border: "1px black solid",
        width: "20%",
      }}
    >
      <img src={img} width={"100vw"} height={"100vh"} />
      <h1>{name}</h1>
      <h3>{price}</h3>
    </div>
  );
};

export default ProductCard;
