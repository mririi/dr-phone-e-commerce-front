import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { fetchProducts } from '../apiService';
import { useCart } from '../cartContext';

const Home = ({ filters }) => {
  // fetch date using fetchProducts
  const [products, setProducts] = useState(null);
  const { addToCart } = useCart();
  const filteredProducts = applyFilters(products, filters);

  useEffect(() => {
    if(products === null){
      getProducts().then((data) => {
        setProducts(data);
        console.log(data)
      });
    }
  },[products]);

  const getProducts = async () => {
    try {
      const response = await fetchProducts();
      return response;
    } catch (error) {
      throw error;
    }
  }

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  
  return (
    <>
    <Container>
      <Row>
      {filteredProducts?.map((product, index) => (
        <Col key={index} md={4} style={{height:200}}>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product?.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Row>
                <Col>
              <Card.Text>
                {product.price}
              </Card.Text>
              </Col>
              <Col>
              <Card.Text>
                {product.quantity}
              </Card.Text>
              </Col>
              <Col>
              <Card.Text>
                {product.sold}
              </Card.Text>
              </Col>
              <Col>
              <Card.Text>
                {product.category?.name}
              </Card.Text>
              </Col>
              </Row>
              <Button variant="primary" onClick={()=>handleAddToCart(product)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
    </Container>
    </>
  );
};

export default Home;

const applyFilters = (products, filters) => {
  // Apply filters based on the provided filter values
  // For example, filter by category
  if (filters.category) {
    console.log(products?.filter((product) => product.category?.name === filters.category))
    return products?.filter((product) => product.category?.name === filters.category);
  
  }

  // Add more filter conditions as needed
  return products;
};