import React, { useState } from "react";
import ListCategory from "./containers/categories/List";
import ListProducts from "./containers/products/List";
import ModifyProduct from "./containers/products/ModifyProduct";
import ModifyCategory from "./containers/categories/ModifyCategory";
import AddCategory from "./containers/categories/AddCategory";
import AddProduct from "./containers/products/AddProduct";

const DashboardContainer = ({ container, containerChanged }) => {
  const [id, setId] = useState(null);
  const onModifyClickedProduct = (id) => {
    containerChanged("ModifyProduct");
    setId(id);
  };
  const onModifyClickedCategory = (id) => {
    containerChanged("ModifyCategory");
    setId(id);
  };
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        right: "5%",
        width: "70%",
        height: "80vh",
        backgroundColor: "rgba(211, 211, 211, 0.5)",
        border: "2px solid grey",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 15,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
      }}
    >
      {container === "home" ? <h1>WELCOME TO ADMIN DASHBOARD</h1> : null}
      {container === "AddCategory" ? <AddCategory /> : null}
      {container === "ListCategory" ? (
        <ListCategory onModify={onModifyClickedCategory} />
      ) : null}
      {container === "ModifyCategory" ? <ModifyCategory id={id} /> : null}
      {container === "AddProduct" ? <AddProduct /> : null}
      {container === "ListProduct" ? (
        <ListProducts onModify={onModifyClickedProduct} />
      ) : null}
      {container === "ModifyProduct" ? <ModifyProduct id={id} /> : null}
    </div>
  );
};

export default DashboardContainer;
