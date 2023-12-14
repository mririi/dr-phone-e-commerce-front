import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const DashboardSideBar = ({ onContainerChange }) => {
  const onLoadContainer = (container) => {
    console.log("clicked");
    onContainerChange(container);
  };
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "3%",
        marginRight: "2%",
        width: "20%",
        height: "30vh",
        backgroundColor: "rgba(211, 211, 211, 0.5)",
        border: "2px solid grey",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 15,
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h5>DASHBOARD</h5>
      <DropdownButton id="dropdown-basic-button" title="Categories">
        <Dropdown.Item onClick={() => onLoadContainer("AddCategory")}>
          Add
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onLoadContainer("ListCategory")}>
          List
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton id="dropdown-basic-button" title="Products">
        <Dropdown.Item onClick={() => onLoadContainer("AddProduct")}>
          Add
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onLoadContainer("ListProduct")}>
          List
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default DashboardSideBar;
