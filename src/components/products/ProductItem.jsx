import React from "react";

const ProductItem = ({ elem }) => {
  return (
    <div>
      Title: {elem.title}: {elem.title}
      Price: {elem.price}
      Category: {elem.category.title}
      Description: {elem.description}
      <img width={150} src={elem.image} alt="" />
    </div>
  );
};

export default ProductItem;
