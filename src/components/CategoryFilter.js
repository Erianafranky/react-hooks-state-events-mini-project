import React, {useState} from "react";

function CategoryFilter({categories,onCategoryFilter}) {
  const [selected, setSelected] = useState(false);
  function handleClick(e, category) {
    setSelected(e.target.id);
    onCategoryFilter(category);
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5> 
      {/* render <button> elements for each category here */}
      {categories?.map((category, index) => {
        return (
          <button
            id={category}
            className={`${selected === category ? "selected" : ""}`}
            key={index}
            onClick={(e) => handleClick(e, category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
