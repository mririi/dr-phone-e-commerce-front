import React, { Component } from "react";
import Slider from "react-slick";
import product1 from "../assets/images/product1.png";
export default class ProductSlider extends Component {
  render() {
    var settings = {
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img style={{width:250,height:250}} src={product1} alt="product1" />
          </div>
          <div>
          <img style={{width:250,height:250}} src={product1} alt="product1" />
          </div>
          <div>
          <img style={{width:250,height:250}} src={product1} alt="product1" />
          </div>
          <div>
          <img style={{width:250,height:250}} src={product1} alt="product1" />
          </div>
          <div>
          <img style={{width:250,height:250}} src={product1} alt="product1" />
          </div>
          <div>
          <img style={{width:250,height:250}} src={product1} alt="product1" />
          </div>
          <div>
          <img style={{width:250,height:250}} src={product1} alt="product1" />
          </div>
          <div>
          <img style={{width:250,height:250}} src={product1} alt="product1" />
          </div>
        </Slider>
      </div>
    );
  }
}