import React, { useEffect, useState } from "react";
import { useCart } from "../../context/cartContext";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Checkout from "./Checkout";
const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (cart.length === 0) {
      setTotal(0);
      return;
    }
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  const checkout = () => {
    setOpen(true);
  };
  const navigateTo = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div style={{ paddingLeft: "20vh" }}>
      <h2 style={{ marginBottom: 30 }}>Your Shopping Cart</h2>
      <Row
        style={{
          height: 70,
          width: "90%",
          backgroundColor: "rgba(211, 211, 211, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
          paddingLeft: "10vh",
        }}
      >
        <Col>
          <h5>Image</h5>
        </Col>
        <Col>
          <h5>Product</h5>
        </Col>
        <Col>
          <h5>Price</h5>
        </Col>
        <Col>
          <h5>Actions</h5>
        </Col>
      </Row>
      {cart.map((item, index) => (
        <Row
          key={index}
          style={{
            height: 100,
            width: "90%",
            backgroundColor: "rgba(211, 211, 211, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
            paddingLeft: "10vh",
          }}
        >
          <Col>
            <img
              src={item.image}
              alt={item.name}
              style={{ height: 50, width: 50 }}
            />
          </Col>
          <Col>
            <h5 onClick={() => navigateTo(item._id)}>{item.name}</h5>
          </Col>
          <Col>{item.price}</Col>
          <Col>
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(item._id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </Col>
        </Row>
      ))}
      {cart.length !== 0 ? (
        <>
          <h5>Total: {total}</h5>
          <button
            className="btn btn-success"
            style={{ marginBottom: 20 }}
            onClick={checkout}
          >
            Checkout
          </button>
        </>
      ) : (
        <div
          style={{ width: "80%", display: "flex", justifyContent: "center" }}
        >
          <h5>Your cart is empty</h5>
        </div>
      )}
      <Checkout
        open={open}
        amount={total !== 0 ? total : "500"}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default ShoppingCart;
