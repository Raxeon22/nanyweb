import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Carousel,
  Tabs,
  Tab,
  Container,
  Button,
} from "react-bootstrap";
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Products } from "../../pages/Shop/Shop";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";

// const bleh = (
//   <b>
//     <RiTShirt2Line size="30" />T Shirts
//   </b>
// );
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  speed: 500,
  arrows: false,
  autoplaySpeed: 2000,
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

const Shop = (props) => {
  const [category, setcategory] = useState([]);
  const [key, setKey] = useState("");

  const [product, setproduct] = useState([]);
  async function fetchproductdata() {
    const action = await Action.get("/category", {});

    if (action.data.success == true) {
      setcategory(action.data.data);
    } else {
      // setcategory([]);
    }
  }

  async function getproduct(k) {
    console.log(k);
    const response = await Action.get("/product?category=" + k, {});
    if (response.data.success == true) {
      setproduct(response.data.data);
      console.log(product);
    } else {
    }
  }

  useEffect(async () => {
    fetchproductdata();
  }, []);

  return (
    <div className="our-products">
      <Container>
        <h1>Our Products</h1>
        <p>There is something perfect for every business, brand, or event.</p>
        <div className="">
          <div className="prod-tabs">
            <Tabs
              // defaultActiveKey={key}
              activeKey={key}
              onSelect={(k) => {
                getproduct(k);
                setKey(k);
              }}
            >
              {category.map((item) => {
                return (
                  <Tab
                    id="dhniowedhji"
                    eventKey={item._id}
                    title={item.heading}
                  >
                    <div className="">
                      <h3> {props.heading} </h3>
                      <Slider className="" {...settings}>
                        {product.map((val) => {
                          return (
                            <div className="each-slide">
                              <img
                                src={baseURL + val.image}
                                width="100%"
                                height="300"
                                alt=""
                                className="p-1"
                              />
                              <p> {val.name} </p>
                              <span> {val.price} </span>
                              <br></br>
                              <Button
                                onClick={() => {
                                  if (
                                    localStorage.getItem("order")
                                      ? localStorage.getItem("order").length
                                      : -1 > 0
                                  ) {
                                    const content = JSON.parse(
                                      localStorage.getItem("order")
                                    );
                                    content.push(val);
                                    localStorage.setItem(
                                      "order",
                                      JSON.stringify(content)
                                    );
                                  } else {
                                    localStorage.setItem(
                                      "order",
                                      JSON.stringify([val])
                                    );
                                  }
                                }}
                              >
                                Add to cart
                              </Button>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                  </Tab>
                );
              })}
            </Tabs>
            {/* <Tab eventKey="sweat-shirts" title={<GiMonclerJacket />}>
              <p>return policy</p>
            </Tab>
            <Tab eventKey="head-wear" title={<GiBilledCap />}>
              <p>return policy</p>
            </Tab>
            <Tab eventKey="polos" title={<GiPoloShirt />}>
              <p>return policy</p>
            </Tab>
            <Tab eventKey="accessories" title={<GiJewelCrown />}>
              <p>return policy</p>
            </Tab> */}
          </div>
        </div>
        {/* <div className="d-block d-lg-none">
            <Carousel  className="services-slider" controls={false}>
                {
                    ProductDetails.map((val , index)=>{
                      return(
                        <Carousel.Item >

                           <Col xs="12" md="4" key={index}>
                                <Link to="/shop">
                                    <Card className="each-product">
                                        <Card.Img variant="top" />
                                        <img src={val.image} width="100%" height="280" />
                                        <Card.Body>
                                            <Card.Title> {val.title} </Card.Title>
                                        </Card.Body>
                                    </Card> 
                                </Link>
                            </Col>

                            
    
                        </Carousel.Item>
     
                      )
                    })
                }
               

               
            </Carousel>
            </div> */}
      </Container>
    </div>
  );
};
export default Shop;
