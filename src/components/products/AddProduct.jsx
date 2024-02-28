import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";

const AddProduct = () => {
  const { createProduct, categories, getCategories } = useProducts();
  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const handleClick = () => {
    const newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("image", img);
    newProduct.append("category", category);
    createProduct(newProduct);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="file"
        placeholder="img"
        onChange={(e) => setImg(e.target.files[0])}
        accept="image/"
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option>Choose category</option>
        {categories.map((elem) => (
          <option value={elem.id} key={elem.id}>
            {elem.title}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Add Product</button>
    </div>
  );
};

export default AddProduct;
