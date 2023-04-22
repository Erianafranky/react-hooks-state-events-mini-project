import React from "react";

function Task({ category , text, id, onDeleteItem }) {
  function deleteItem() {
    onDeleteItem(id)
    }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteItem}>X</button>
    </div>
  );
}

export default Task;
