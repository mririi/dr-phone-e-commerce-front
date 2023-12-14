import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { fetchCategoryById, updateCategory } from "../../../../services/apiService";
import Swal from "sweetalert2";

const ModifyCategory = ({ id }) => {
  const [category, setCategory] = useState({});

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const data = await fetchCategoryById(id);
        setCategory(data);
      } catch (error) {
        console.error("Error fetching category by ID:", error);
      }
    };

    fetchCategoryData();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the onSubmit prop with the form data
    // Implement the logic for handling the form submission here
    try {
      const updatedCategory = {
        ...category,
        name: e.target.elements.name.value,
      };
      await updateCategory(updatedCategory);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Category Modified!",
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Modify Category</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            defaultValue={category?.name}
          />
        </Form.Group>
        <button className="btn btn-primary mt-3" type="submit">
          Modify
        </button>
      </Form>
    </div>
  );
};

export default ModifyCategory;
