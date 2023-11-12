// Sidebar.js
import React from 'react';

const Sidebar = ({ categories, handleFilter }) => {
  return (
    <div>
      <h3>Filters</h3>
      {/* Add filter options, e.g., categories */}
      <div>
        <h4>Categories</h4>
        <ul>
          {categories.map((category) => (
            <li key={category._id} onClick={() => handleFilter('category', category.name)}>
              {category?.name}
            </li>
          ))}
        </ul>
      </div>
      {/* Add more filter options as needed */}
    </div>
  );
};

export default Sidebar;
