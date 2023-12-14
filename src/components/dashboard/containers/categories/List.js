import { Table } from "@mui/material";
import React, { useEffect, useState } from "react";
import { deleteCategory, fetchCategories } from "../../../../services/apiService";

const List = ({ onModify }) => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    if (categories === null) {
      getCategories().then((data) => {
        setCategories(data);
      });
    }
  }, [categories]);

  const getCategories = async () => {
    try {
      const response = await fetchCategories();
      return response;
    } catch (error) {
      throw error;
    }
  };
  const onDelete = async (id) => {
    try {
      await deleteCategory(id);
      setCategories(null);
    } catch (error) {
      throw error;
    }
  };
  const onModifyClicked = (id) => {
    onModify(id);
  };
  return (
    <div style={{ maxHeight: "450px", overflowY: "auto" }}>
      <h1>LIST CATEGORIES</h1>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category) => (
            <tr key={category._id}>
              <td>{category._id}</td>
              <td>{category.name}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => onModifyClicked(category._id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mr-1"
                  onClick={() => onDelete(category._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default List;
