import React, { useEffect, useState } from "react";
import { deleteProduct, fetchProducts } from "../../../../services/apiService";
import { Table } from "react-bootstrap";

const List = ({ onModify }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    if (products === null) {
      getProducts().then((data) => {
        setProducts(data);
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

  const onDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(null);
    } catch (error) {
      throw error;
    }
  };

  const onModifyClicked = (id) => {
    onModify(id);
  };
  return (
    <div style={{ maxHeight: "450px", overflowY: "auto" }}>
      <h1>LIST PRODUCTS</h1>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Shipping</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sold</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.shippingAvailable ? "Yes" : "No"}</td>
              <td>{product.category?.name ?? "No category"}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.sold}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => onModifyClicked(product._id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mr-1"
                  onClick={() => onDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default List;
