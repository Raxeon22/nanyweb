import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Products } from "../../../pages/Shop/Shop";
import Headphones from "../../../assets/headphones.jpg";

const ProductPageSlider = (props) => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={Products[i].image} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
  return (
    <div className="indiv-showcase">
      <Slider className="react-slider" {...settings}>
        {Products.map((val) => {
          return (
            <div className="each-slid overflow-hidden">
              <img
                src={val.image}
                width="100%"
                height="400"
                alt=""
                className="p-1"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default ProductPageSlider;
