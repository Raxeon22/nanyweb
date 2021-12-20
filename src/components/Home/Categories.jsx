import React, { useEffect, useState } from "react";
import { Row, Col, Carousel, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeApplic from "../../assets/home-applic.jpg";
import HeadPhones from "../../assets/headphones.jpg";
import SelfieStick from "../../assets/selfie-stick.jpg";
import Speakers from "../../assets/speakers.jpg";
import { RiTShirt2Line } from "react-icons/ri";
import {
  GiMonclerJacket,
  GiBilledCap,
  GiPoloShirt,
  GiJewelCrown,
} from "react-icons/gi";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";

const ProductDetails = [
  {
    title: "Head Phones",
    image:
      "https://images.pexels.com/photos/1475418/pexels-photo-1475418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Electrons",
    image:
      "https://images.pexels.com/photos/4417768/pexels-photo-4417768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Speakers",
    image:
      "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];
const bleh = (
  <b>
    <RiTShirt2Line size="30" />T Shirts
  </b>
);

const Shop = () => {
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
  });

  return (
    <div className="categories">
      <Container>
        <h2>Categories </h2>
        <div className="">
          <div className="cate-tabs d-none d-lg-block">
            <Carousel interval={2000}>
              <Carousel.Item>
                <Row>
                  {category.map((item) => {
                    return (
                      <Col className="each-img" md="3">
                        <div className="img-text">
                          <h4> {item.heading} </h4>
                          <p>{item.etxt}</p>
                        </div>
                        <img
                          width="100%"
                          height="400"
                          src={baseURL + item.image}
                          alt=""
                        />
                      </Col>
                    );
                  })}
                </Row>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        {/* categories for mobile   */}
        <div className="d-block d-lg-none">
          <Carousel className="cate-tabs">
            <Carousel.Item>
              <Row>
                {ProductDetails.map((val, index) => {
                  return (
                    <Col className="each-img" md="3">
                      <div className="img-text">
                        <h4> T-shirts </h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.{" "}
                        </p>
                      </div>
                      <img width="100%" height="500" src={val.image} alt="" />
                    </Col>
                  );
                })}
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};
export default Shop;
