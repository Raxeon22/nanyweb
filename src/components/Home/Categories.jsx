import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Carousel, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeApplic from "../../assets/home-applic.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";
import { Spinner } from 'react-bootstrap'


const Categories = () => {
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
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 760,
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
  const [category, setcategory] = useState(false);
  async function fetchcategorydata() {
    const response = await Action.get("/category", {});
    if (response.data.success == true) {
      setcategory(response.data.data);
    } else {
      setcategory(false);
    }
  }

  useEffect(async () => {
    fetchcategorydata();
  }, []);


  return (
    <div className="categories">

      <Container>
        <h2 className="before_line">Categories </h2>
        { category ?
          <div className="cate-tabs">
            <Slider className="react-slider" { ...settings }>
              { category.map((item) => {
                return (
                  <div className="each-img px-3">
                    <Link
                      to={ {
                        pathname: "/shop",
                        state: { item },
                      } }
                    >
                      <div className="img-text">
                        <h4> { item.heading } </h4>
                        <p>{ item.text }</p>
                      </div>
                      <img
                        width="100%"
                        height="400"
                        src={ baseURL + item.image }
                        alt=""
                      />
                    </Link>
                  </div>
                );
              }) }
            </Slider>

          </div> : <div className="text-center"><Spinner animation="border" variant="dark" /></div> }
      </Container>
    </div>
  );
};
export default Categories;
