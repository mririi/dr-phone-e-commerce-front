import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchProducts } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res);
    });
  }, []);
  const navigateTo = (id) => {
    navigate(`/products/${id}`);
  }
  return (
    <div>
      <Slider {...settings}>
        {products?.map((product,index) => (
          <div key={index}>
            <img
              onClick={()=>navigateTo(product._id)}
              style={{ width: 250, height: 250,cursor:"grab"}}
              src={product.image}
              alt={product.name}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default ProductSlider;