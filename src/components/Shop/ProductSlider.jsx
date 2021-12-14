import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Products} from '../../pages/Shop/Shop'
 

const ProductSlider = (props) => {  
  
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      arrows : true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
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
      <div className="new-arrivals">
        <h3> {props.heading} </h3>
        <Slider className="react-slider" {...settings}>
         {
             Products.map((val) => {
                 return(
                     <div  className="each-slid">
                         <img src={val.image} width="100%" height="300" alt="" className="p-1" />
                         <p> {val.title} </p>
                         <span> {val.price} </span>
                     </div>
                 )
             })
         }
        </Slider>
      </div>
    );
  
}
export default ProductSlider