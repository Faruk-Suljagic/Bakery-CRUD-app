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
  const [newActive, setNewActive] = useState(true);
  const [newProductId, setNewProductId] = useState([]);
  const [newId, setNewId] = useState([]);
  const [toggleAdd, setToggleAdd] = useState(false);

  const onCreate = () => {
    const db = firebaseApp.firestore();
    db.collection("products").add({
      name: newProduct,
      image: newImage,
      active: newActive,
      productId: parseInt(newProductId),
      id: newId,
      price: parseInt(newPrice),
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const db = firebaseApp.firestore();
      const data = await db.collection("products").get();
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
  console.log(products);

  //   var unique = Math.random() * products.productId + products.price;

  return (
    <div className="product-container">
      <Navbar
        toggleAdd={toggleAdd}
        setToggleAdd={setToggleAdd}
        priced={products.price}
        active={products.active}
      />
      <div className={toggleAdd === true ? "add-product" : "hiddenProduct"}>
        <div className="product-input-wrapper">
          {" "}
          <div className="product-input1">
            <div className="label">
              <label>Name:</label>
              <input
                autoFocus
                value={newProduct}
                onChange={(e) => setNewProduct(e.target.value)}
              />
            </div>
            <div className="label">
              <label>Price:</label>
              <input
                value={newPrice}
                type="number"
                onChange={(e) => setNewPrice(e.target.value)}
              />
            </div>
            <div className="label">
              <label>
                Active:
                <br />
                <span className="active-information">
                  "Available" is the default value
                </span>
              </label>
              <input type="checkbox" onClick={() => setNewActive(!newActive)} />
            </div>
          </div>
          <div className="product-input2">
            <div className="label">
              <label>Image URL:</label>
              <input
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
              />
            </div>
            <div className="label">
              <label>Product Id:</label>
              <input
                value={newProductId}
                onChange={(e) => setNewProductId(e.target.value)}
              />
            </div>
            <div className="label">
              <label>ID:</label>
              <input value={newId} onChange={(e) => setNewId(e.target.value)} />
            </div>
          </div>
        </div>
        <button onClick={onCreate}>Create Product</button>
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
