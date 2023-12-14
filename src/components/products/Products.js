import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { fetchCategories, fetchProducts } from "../../services/apiService";
import { useCart } from "../../context/cartContext";
import Sidebar from "../layout/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [filters, setFilters] = useState({
    category: "all",
  });
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const { addToCart } = useCart();
  const filteredProducts = applyFilters(products, filters);
  const navigate = useNavigate();
  useEffect(() => {
    if (products === null) {
      getProducts().then((data) => {
        setProducts(data);
      });
    }
  }, [products]);

  useEffect(() => {
    if (products === null) {
      getCategories().then((data) => {
        setCategories(data);
      });
    }
  }, [products]);

  const getProducts = async () => {
    try {
      const response = await fetchProducts();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getCategories = async () => {
    try {
      const response = await fetchCategories();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleFilter = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };
  const navigateTo = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
      <Sidebar categories={categories} handleFilter={handleFilter} />
      <Container style={{ marginLeft: "25vw" }}>
        <Row>
          {filteredProducts?.map((product, index) => (
            <Col key={index} md={4}>
              <Card
                style={{
                  minHeight: 30,
                  marginBottom: 20,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: 10,
                }}
              >
                {!!product.category?.name && (
                  <div
                    style={{
                      backgroundColor: "black",
                      position: "absolute",
                      left: 0,
                      top: 0,
                      padding: 10,
                      borderBottomRightRadius: 20,
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    {product.category?.name}
                  </div>
                )}
                <p
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "lightgreen",
                    fontWeight: "600",
                    padding: 10,
                    backgroundColor: "black",
                    borderBottomLeftRadius: 20,
                  }}
                >
                  {product.price} DT
                </p>
                <Card.Img variant="top" src={product?.image} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "800" }}>
                    {product?.name}
                  </Card.Title>
                  <Row>
                    <Col md={7}>
                      <Card.Text style={{ fontWeight: "500" }}>
                        Quantity
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>{product.quantity}</Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={7}>
                      <Card.Text style={{ fontWeight: "500" }}>
                        Items Sold
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>{product.sold}</Card.Text>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 35 }}>
                    <Col>
                      <Button
                        style={{
                          backgroundColor: "black",
                          position: "absolute",
                          left: 0,
                          bottom: 0,
                        }}
                        onClick={() => navigateTo(product._id)}
                      >
                        More Details
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "black",
                          position: "absolute",
                          right: 0,
                          bottom: 0,
                        }}
                        onClick={() => handleAddToCart(product)}
                      >
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;

const applyFilters = (products, filters) => {
  if (filters.category) {
    if (filters.category === "all") {
      return products;
    }
    return products?.filter(
      (product) => product.category?.name === filters.category
    );
  }
  return products;
};
