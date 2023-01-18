import React from "react";
import {useState}  from "react";


function Item({ name, category }) {
  const [inCart, setCart] = useState(false)

  const addToCart = ()=>{
    setCart(true);
  }

  return (
    <li className="">
    <li className={inCart ? 'in-cart': ''}></li>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
