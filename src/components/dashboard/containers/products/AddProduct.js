import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { createProduct, fetchCategories } from "../../../../services/apiService";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategoriesData = async () => {
      try {
        const response = await fetchCategories();
        setCategories(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategoriesData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = {
        name: e.target.elements.name.value,
        price: e.target.elements.price.value,
        quantity: e.target.elements.quantity.value,
        sold: e.target.elements.sold.value,
        category: e.target.elements.category.value,
        description: e.target.elements.description.value,
        shippingAvailable: e.target.elements.shippingAvailable.checked,
        image: e.target.elements.image.value,
      };
      await createProduct(updatedProduct);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product Added!",
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter name" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Price"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                placeholder="Quantity"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Sold</Form.Label>
              <Form.Control
                type="number"
                name="sold"
                placeholder="sold items"
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" name="category">
                {categories?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group>
              <Form.Check
                type="checkbox"
                name="shippingAvailable"
                label="Shipping Available"
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" rows={3} />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" name="image" placeholder="Enter image URL" />
            </Form.Group>
          </Col>
          <button className="btn btn-primary mt-2 w-50 m-auto" type="submit">
            Add
          </button>
        </Row>
      </Form>
    </div>
  );
};

export default AddProduct;
