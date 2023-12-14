import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import {
  fetchCategories,
  fetchProductById,
  updateProduct,
} from "../../../../services/apiService";
import Swal from "sweetalert2";

const ModifyProduct = ({ id }) => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getCategoriesData = async () => {
      try {
        const response = await fetchCategories();
        setCategories(response);
      } catch (error) {
        console.error(error);
      }
    };

    getCategoriesData();
  }, []);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = {
        ...product,
        name: e.target.elements.name.value,
        price: e.target.elements.price.value,
        quantity: e.target.elements.quantity.value,
        sold: e.target.elements.sold.value,
        category: e.target.elements.category.value,
        description: e.target.elements.description.value,
        shippingAvailable: e.target.elements.shippingAvailable.checked,
        image: e.target.elements.image.value,
      };
      await updateProduct(updatedProduct);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product Modified!",
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Modify Product</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                defaultValue={product?.name}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Price"
                defaultValue={product?.price}
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
                defaultValue={product?.quantity}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Sold</Form.Label>
              <Form.Control
                type="number"
                name="sold"
                placeholder="Sold items"
                defaultValue={product?.sold}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                defaultValue={product?.category?._id}
              >
                {categories?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Check
                type="checkbox"
                name="shippingAvailable"
                label="Shipping Available"
                defaultChecked={product?.shippingAvailable}
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={3}
                defaultValue={product?.description}
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                placeholder="Enter image URL"
                defaultValue={product?.image}
              />
            </Form.Group>
          </Col>
          <button className="btn btn-primary mt-2 w-50 m-auto" type="submit">
            Modify
          </button>
        </Row>
      </Form>
    </div>
  );
};

export default ModifyProduct;
