import React, { useEffect, useState } from "react";
import firebaseApp from "../firebase";
import Navbar from "./Navbar";
import { ProductInput } from "./ProductInput";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const [newImage, setNewImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebaseApp.firestore();
      const data = await db.collection("products").get();
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  });

  const onCreate = () => {
    const db = firebaseApp.firestore();
    db.collection("products").add({ name: newProduct, image: newImage });
  };
  //   var unique = Math.random() * products.productId + products.price;

  return (
    <div className="product-container">
      <input
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <input
        value={newImage}
        placeholder="Paste the URL"
        onChange={(e) => setNewImage(e.target.value)}
      />
      <button onClick={onCreate}>Create</button>
      <Navbar />
      <div className="product-wrapper">
        {products.map((prod) => {
          return (
            <div className="product" key={prod.name}>
              <ProductInput products={prod} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
