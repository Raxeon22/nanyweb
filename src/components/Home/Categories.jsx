import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Carousel, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeApplic from "../../assets/home-applic.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";


const Categories = () => {
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
  const [category, setcategory] = useState([]);
  async function fetchcategorydata() {
    const response = await Action.get("/category", {});
    if (response.data.success == true) {
      setcategory(response.data.data);
    } else {
      setcategory([]);
    }
  }

  useEffect(async () => {
    fetchcategorydata();
  }, []);
  const arrows = category.length > 4 ? true : false
  console.log(arrows)

  return (
    <div className="categories">
      <Container>
        <h2>Categories </h2>
        <div className="cate-tabs">
          <Slider className="react-slider" { ...settings }>
            { category.map((item) => {
              return (
                <div className="each-img">
                  <Link
                    to={ {
                      pathname: "/shop",
                      state: { item },
                    } }
                  >
                    <div className="img-text">
                      <h4> { item.heading } </h4>
                      <p>{ item.etxt }</p>
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
          {/* <Carousel controls={ arrows } interval={ 2000 }>
              <Carousel.Item>
                <Row>
                  { category.map((item) => {
                    return (
                      <Col className="each-img" md="3">
                        <Link
                          to={ {
                            pathname: "/shop",
                            state: { item },
                          } }
                        >
                          <div className="img-text">
                            <h4> { item.heading } </h4>
                            <p>{ item.etxt }</p>
                          </div>
                          <img
                            width="100%"
                            height="400"
                            src={ baseURL + item.image }
                            alt=""
                          />
                        </Link>
                      </Col>
                    );
                  }) }
                </Row>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="d-block d-lg-none">
          <Carousel className="cate-tabs" interval={ 2000 }>
            { category.map((item) => {
              return (
                <Carousel.Item>
                  <Row>
                    <Col className="each-img" md="3">
                      <Link
                        to={ {
                          pathname: "/shop",
                          state: { item },
                        } }
                      >
                        <div className="img-text">
                          <h4> { item.heading } </h4>
                          <p>{ item.etxt }</p>
                        </div>
                        <img
                          width="100%"
                          height="400"
                          src={ baseURL + item.image }
                          alt=""
                        />
                      </Link>
                    </Col>
                  </Row>
                </Carousel.Item>
              );
            }) }
          </Carousel>*/}
        </div>
      </Container>
    </div>
  );
};
export default Categories;
