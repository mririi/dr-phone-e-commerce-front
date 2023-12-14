import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faShoppingCart,
  faShoppingBag,
  faSignInAlt,
  faHome,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../context/authContext";

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const logOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Navbar
      className="mx-auto"
      expand="lg"
      fixed="top"
      style={{
        width: "50vw",
        paddingLeft: 30,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "rgba(211, 211, 211, 0.5)",
        fontSize: 18,
        borderRadius: 10,
        margin: 20,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Navbar.Brand as={Link} to="/" style={{ fontWeight: "700" }}>
        DR PHONE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            <FontAwesomeIcon icon={faShoppingBag} /> Products
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
          </Nav.Link>
          {!isLoggedIn ? (
            <Nav.Link as={Link} to="/login">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/" onClick={() => logOut()}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
