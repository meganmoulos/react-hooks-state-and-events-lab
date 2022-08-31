import React, {useState} from "react";

function Item({ name, category }) {

  // declare state
  const [inCart, setInCart] = useState(false)

  const itemClass = inCart ? "in-cart" : ""

  function toggleInCart(){
    setInCart(!inCart)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={toggleInCart}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
