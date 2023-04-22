import React, {useState} from "react";
import Task from "./Task";
import CategoryFilter from "./CategoryFilter";

function TaskList({items, onDelete }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

 const itemsToDisplay = items?.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  }); 
  

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <CategoryFilter onChange={handleCategoryChange} /> 
      
        {itemsToDisplay?.map((item, index) => (
          <Task key={item.text} category={item.category} text={item.text} onDeleteItem= {onDelete} id={index} />
        ))} 
        
    
    </div>
  );
}

export default TaskList;
