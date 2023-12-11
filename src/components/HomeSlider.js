// HomeCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/images/slider1.png';
import image2 from '../assets/images/slider2.png';
import image3 from '../assets/images/slider3.png';
const images = [
  image1,
  image2,
  image3
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
          <img src={image} alt={`carousel-${index}`} style={{ width: '100%', maxHeight: '50vh', objectFit: 'fill' }} />
        </div>
      ))}
    </Slider>
  );
};

export default HomeSlider;
