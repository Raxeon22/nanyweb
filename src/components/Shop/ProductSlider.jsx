import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Products } from "../../pages/Shop/Shop";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const ProductSlider = (props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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

  const [product, setproduct] = useState([]);
  async function getproduct() {
    const response = await Action.get("/product", {});
    if (response.data.success == true) {
      setproduct(response.data.data);
    } else {
    }
  }
  useEffect(async () => {
    getproduct();
  });
  return (
    <div className="new-arrivals">
      <h3> {props.heading} </h3>
      <Slider className="react-slider" {...settings}>
        {product.map((val) => {
          return (
            <div className="each-slid">
              <Link
                to={{
                  pathname: "/shop/product",
                  state: { val },
                }}
                // onClick={() => {
                //   localStorage.setItem("data", JSON.stringify(val));
                // }}
              >
                <Card className="each-card">
                  <Card.Img variant="top" />
                  <img src={baseURL + val.image} width="100%" height="280" />
                  <Card.Body>
                    <Card.Title>
                      <div className="text-center">
                        <span className="price"> {val.price} </span>

                        <p>{val.name} </p>
                      </div>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default ProductSlider;
