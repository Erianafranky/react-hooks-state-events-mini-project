import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [items, setItems] = useState(TASKS);
  const filterCategory = (category) => {
    if (category === "All") {
      return setItems(TASKS);
    }
    const newItems = TASKS.filter((item) => item.category === category);
    setItems(newItems);
  };
  function handleDelete(id) {
    setItems((items) => {
      return items.filter((item, index) => index !== id)
      
    })
  }
  function addNewTask(item){
  setItems((items)=>[...items,item])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onCategoryFilter={filterCategory} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={addNewTask} categories={CATEGORIES} />
      <TaskList items = {items} onDelete={handleDelete} />
    </div>
  );
}

export default App;
