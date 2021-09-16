import React, { useState } from "react";
import firebase from "../firebase";
import "./ProductInput.css";

export const ProductInput = ({ products }) => {
  const [name, setName] = useState(products.name);

  const [toggleInput, setToggleInput] = useState(false);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("products")
      .doc(products.id)
      .set({ ...products, name });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("products").doc(products.id).delete();
  };

  return (
    <>
      <img
        src={products.image}
        alt={products.name}
        width="230px"
        height="190px"
      />

      <div className="product-information">
        <div className="button-wrapper">
          <input
            autoFocus
            disabled={!toggleInput}
            defaultValue={products.name}
            placeholder={products.name}
            className={toggleInput === false ? "hideInput" : "showInput"}
            onChange={(e) => setName(e.target.value)}
          />
          <div onClick={() => setToggleInput(!toggleInput)}>
            <i className="far fa-edit" onClick={onUpdate} />
          </div>
          <i className="far fa-trash-alt" onClick={onDelete} />
        </div>
        <p>${products.price.toFixed(2)}</p>
        <span>
          Available: {products.active === true ? "Available" : "Unavailable"}
        </span>
      </div>
    </>
  );
};
