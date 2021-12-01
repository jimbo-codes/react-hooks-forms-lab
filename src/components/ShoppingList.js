import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchCategory] = useState('');
  // const [newName, setName] = useState('');
  const [array, setArray] = useState(items);
  const [itemName, setItemName] = useState("");
  const [itemCategory, setCategoryName] = useState("Produce");
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    console.log(event.target);
  }
  function handleSearchChange(event) {setSearchCategory(event.target.value)}

// function handleSubmit(event){

// }
const newItem = {
  id: uuid(),
  name: itemName,
  category: itemCategory,
};
function onItemFormSubmitHandler(event){
  // return (event) => {
    event.preventDefault();
    // console.log(item.name);
    // event.target.reset();
  setArray([...array, newItem]);
  
}
 
function onItemCategoryChange(event) {
setCategoryName(event.target.value)
}
function onItemNameChange(event) {
  setItemName(event.target.value)
  // itemsToDisplay = [...itemsToDisplay, itemName]
  }


  // function addElement(element) {
      
  // }
  // call this add element function on form submission (and pass the element into it)


  const itemsToDisplay = array.filter((item) => {
    if(search !== "") {
      return item.name.toLowerCase().includes(search.toLowerCase())
    }
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  // modify the item array to include the added component initial state should be jsut same as item

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmitHandler}
      onItemNameChange={onItemNameChange}
      onItemCategoryChange={onItemCategoryChange}/>
      <Filter onCategoryChange={handleCategoryChange}
      onSearchChange = {handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
