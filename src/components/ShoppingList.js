import React,{useState} from "react";
import Item from "./Item";



function ShoppingList({items}) {

  const [selectedCategory,setSelectedCategory]=useState("")
  //console.log(items)

  function handleChange(event) {
    setSelectedCategory(event.target.value)
    //console.log(event.target.value)
    return setSelectedCategory
  }
  //console.log(selectedCategory)
  let filteredItems=items.filter(item => item.category===selectedCategory)
  //if(filteredItems.length==0) {
  //  console.log('no filters')
  //}

  function DisplayItems() {
    if(filteredItems.length===0) {
      return (
        items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))
      )
    } else {
      return (
        filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))
      )
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        <DisplayItems />
      </ul>
    </div>
  );
}

export default ShoppingList;
