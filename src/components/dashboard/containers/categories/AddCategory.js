import React from "react";
import { Form } from "react-bootstrap";
import { createCategory } from "../../../../services/apiService";
import Swal from "sweetalert2";

const AddCategory = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedCategory = {
        name: e.target.elements.name.value,
      };
      await createCategory(updatedCategory);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Category Add!",
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add Category</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>
        <button className="btn btn-primary mt-3" type="submit">
          Add
        </button>
      </Form>
    </div>
  );
};

export default AddCategory;
