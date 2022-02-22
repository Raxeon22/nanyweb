import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";
import { Link } from "react-router-dom";
import { Card, Row, Col, Spinner } from "react-bootstrap";

const ProductSlider = (props) => {
  const { show } = props
  var settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: show ? show : 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [product, setproduct] = useState(false);
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
      <h3> { props.heading } </h3>
      { product ?
        <Slider className="react-slider" { ...settings }>
          { product.map((val) => {
            return (
              <div className="each-slid">
                <Card className="each-card">
                  <Card.Img variant="top" />
                  <Link to={ `/shop/product/${ val._id }` }  >
                    <img src={ baseURL + val.image[0] } width="100%" height="280" />
                  </Link>
                  <Card.Body>
                    <Card.Title >
                      <Row>
                        <Col xs="9" style={ { textAlign: "left" } }>
                          <span className="price"> <small>$</small>{ val.price } </span>

                          <p>{ val.name } </p>
                        </Col>
                        <Col xs="2" className="mt-3">
                          <span className="cart_button"
                            onClick={ () => {
                              var col = []
                              val.color.map((clr) => {
                                col.push(clr.name)
                              })
                              val.color = col;
                              val.quantity = 1
                              val.size = val.size[0][Object.keys(val.size[0])[0]]
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
                              // window.location.reload()
                            } }
                          >
                            <AiOutlineShoppingCart size={ 25 } color=" white" />
                          </span>
                        </Col>
                      </Row>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          }) }
        </Slider> : <div className="text-center"><Spinner animation="border" variant="dark" /></div> }
    </div>
  );
};
export default ProductSlider;
