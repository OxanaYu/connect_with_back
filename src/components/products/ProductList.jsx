import React, { useEffect } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>PRODUCT LIST</h1>
      {products.map((elem) => (
        <ProductItem elem={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default ProductList;
