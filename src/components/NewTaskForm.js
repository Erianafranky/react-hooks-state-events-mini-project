import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit,categories}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("code");
  
  function handleNameChange(event) {
    setText(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({
      text,
      category,
    });
  
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleNameChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          <option value="All">All</option>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
