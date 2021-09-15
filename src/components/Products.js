import React, { useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import firebaseApp from "../firebase";
import Navbar from "./Navbar";
import { ProductInput } from "./ProductInput";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const [newImage, setNewImage] = useState([]);
  const [newPrice, setNewPrice] = useState([]);

  const onCreate = () => {
    const db = firebaseApp.firestore();
    db.collection("products").add({
      name: newProduct,
      image: newImage,
      price: parseInt(newPrice),
    });
  };
  console.log(typeof newPrice, newPrice);
  console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebaseApp.firestore();
      const data = await db.collection("products").get();
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  //   var unique = Math.random() * products.productId + products.price;

  return (
    <div className="product-container">
      <Navbar />
      <div className="add-product">
        <div className="label">
          <label>Name</label>
          <input
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
          />
        </div>
        <div className="label">
          <label>Price</label>
          <input
            value={newPrice}
            type="number"
            onChange={(e) => setNewPrice(e.target.value)}
          />
        </div>

        <div className="label">
          <label>Image URL</label>
          <input
            value={newImage}
            placeholder="Paste the URL"
            onChange={(e) => setNewImage(e.target.value)}
          />
        </div>
        <button onClick={onCreate}>Create</button>
      </div>
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
