import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
  'https://img.freepik.com/premium-psd/headphone-brand-product-facebook-cover-banner-design_268949-35.jpg',
  'https://img.freepik.com/premium-photo/product-package-boxes-cart-with-shopping-bag-laptop-computer_38716-306.jpg',
   'https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-template_106176-1539.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702425600&semt=ais'
  ];

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images?.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`carousel-${index}`}
            style={{ width: "100%", maxHeight: "50vh", objectFit: "fill" }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default HomeSlider;
