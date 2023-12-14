import React, { useState } from "react";

const Sidebar = ({ categories, handleFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const onSelectCategory = (category) => {
    setSelectedCategory(category);
    handleFilter("category", category);
  };
  return (
    <div
      style={{
        width: "20vw",
        backgroundColor: "rgba(211, 211, 211, 0.5)",
        borderRadius: 10,
        padding: 20,
        position: "fixed",
      }}
    >
      <h3>Filters</h3>
      <div>
        <h6>Categories</h6>
        <ul>
          <li
            onClick={() => onSelectCategory("all")}
            className={selectedCategory === "all" ? "selected" : ""}
          >
            All
          </li>
          {categories?.map((category) => (
            <li
              key={category._id}
              onClick={() => onSelectCategory(category?.name)}
              className={selectedCategory === category.name ? "selected" : ""}
            >
              {category?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
