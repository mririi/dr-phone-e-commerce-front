import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../apiService';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
            getProductById(productId).then((data) => {
                setProduct(data);
            });
    },[productId]);

    const getProductById = async (productId) => {
        try {
            const response = await fetchProductById(productId);
            return response;
        } catch (error) {
            throw error;
        }
    }

  return (
    <div>
      <h2>Product Details</h2>
      <div style={{display:"flex",flexDirection:"row"}}>
        <img src={product?.image} alt={product?.name} style={{height:500,width:'50%'}}/>
        <div style={{paddingLeft:50}}>
        <h3>{product?.name}</h3>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        <p>{product?.quantity}</p>
        <p>{product?.sold}</p>
        
        </div>
        </div>
    </div>
  );
}

export default ProductDetail
