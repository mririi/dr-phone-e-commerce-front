import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../services/apiService";
import { Col, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { useCart } from "../../context/cartContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    getProductById(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);

  const getProductById = async (productId) => {
    try {
      const response = await fetchProductById(productId);
      return response;
    } catch (error) {
      throw error;
    }
  };
  const handleAddToCart = () => {
    addToCart(product);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "15%",
        left: "10%",
        width: "80%",
        backgroundColor: "rgba(211, 211, 211, 0.5)",
        height: "80vh",
        border: "2px solid grey",
        borderRadius: 15,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        padding: 50,
      }}
    >
      <div style={{ height: "100%", width: "50%", backgroundColor: "black" }}>
        <img
          src={product?.image}
          alt={product?.name}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ padding: 30 }}>
        <div
          style={{
            position: "absolute",
            right: "5vw",
            top: 0,
            height: "8vh",
            border: "2px solid grey",
            borderTopWidth: 0,
            width: "7rem",
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            backgroundColor: "green",
          }}
        >
          <h5
            style={{
              position: "absolute",
              color: "white",
              bottom: 0,
              left: 10,
              fontWeight: "700",
            }}
          >
            {product?.price} DT
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ paddingLeft: 50 }}>
            <h1>{product?.name}</h1>
            <h5 style={{ marginTop: 30 }}>Description</h5>
            <p>{product?.description}</p>
            <Row style={{ marginTop: 30 }}>
              {product?.category?.name && (
                <>
                  <Col>
                    <h5>Category</h5>
                    <p
                      style={{
                        margin: 5,
                        borderRadius: 10,
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "bold",
                        width: "fit-content",
                        padding: 10,
                      }}
                    >
                      {product.category.name}
                    </p>
                  </Col>
                </>
              )}
              <Col>
                <h5>Quantity</h5>
                <p
                  style={{
                    marginLeft: 20,
                    backgroundColor: product?.quantity > 0 ? "green" : "red",
                    color: "white",
                    fontWeight: "bold",
                    width: "fit-content",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  {product?.quantity}
                </p>
              </Col>
              <Col>
                <h5>Sold</h5>
                <p
                  style={{
                    marginLeft: 5,
                    backgroundColor: product?.sold > 0 ? "green" : "red",
                    color: "white",
                    fontWeight: "bold",
                    width: "fit-content",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  {product?.sold}
                </p>
              </Col>
              <Col>
                <h5 style={{ marginLeft: 30 }}>Shipping</h5>
                <p
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    width: 140,
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: product?.shippingAvailable
                      ? "green"
                      : "red",
                    textAlign: "center",
                  }}
                >
                  {product?.shippingAvailable ? "" : "Not "}Available
                </p>
              </Col>
            </Row>
            <div
              style={{
                marginTop: 30,
                position: "absolute",
                right: 10,
                bottom: 10,
              }}
            >
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: 10,
                  borderRadius: 20,
                  fontWeight: "bolder",
                }}
                onClick={() => handleAddToCart()}
              >
                Add to Cart Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
