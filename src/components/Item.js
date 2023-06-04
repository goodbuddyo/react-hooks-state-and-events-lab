import React,{useState} from "react";

function Item({name,category}) {

  const [isIn,setisIn]=useState(false)
  const appClass=isIn? "in-cart":null

  function handleClick(event) {
    setisIn(!isIn)
  }

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
