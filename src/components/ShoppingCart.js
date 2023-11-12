import React from 'react';
import { useCart } from '../cartContext';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div style={{marginLeft:150}}>
      <h2 style={{marginBottom:50}}>Your Shopping Cart</h2>
      <Row style={{height:100,width:'90%',backgroundColor:'lightblue',marginBottom:20,padding:20}}>
        <div style={{flexDirection:"row", display:"flex",justifyContent:"space-between",width:'92%',paddingRight:50}}>
        <h5 style={{width:'30%'}}>Image</h5>
        <h5 style={{width:'30%'}}>Product</h5>
        <h5 style={{width:'10%'}}>Price</h5>
        <h5 style={{width:'10%'}}>Quantity</h5>
        <h5 style={{width:'10%'}}>Sold</h5>
        </div>
        </Row>
      {cart.map((item,index) => (
      <Row key={index} style={{height:100,width:'90%',backgroundColor:'lightblue',marginBottom:20,padding:20,alignItems:"center",}}>
          <div style={{flexDirection:"row", display:"flex",justifyContent:"space-between",width:'100%'}}>
            <div style={{display:"flex",justifyContent:"space-between",width:"100%",paddingRight:50 }}>
                <div style={{width:'30%'}}><img src={item.image} alt={item.name} style={{height:50,width:50}}/></div>
                <h5 style={{width:'30%'}}><Link to={`/products/${item._id}`}>{item.name}</Link></h5>
                <span style={{width:'10%'}}>{item.price}</span>
                <span style={{width:'10%'}}>{item.quantity}</span>
                <span style={{width:'10%'}}>{item.sold}</span>
            </div>
            
            <button className='btn btn-danger' onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
      </Row>
              ))}

    </div>
  );
};

export default ShoppingCart;