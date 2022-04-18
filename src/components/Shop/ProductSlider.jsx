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
  const [product, setproduct] = useState(false);

  const { show } = props
  var settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: show ? show : 4,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  useEffect(() => {
    async function getproduct() {
      const response = await Action.get("/product", {});
      if (response.data.success === true) {
        setproduct(response.data.data);
      } else {
      }
    }
    getproduct();
  });
  return (
    <div className="new-arrivals">
      <h3> { props.heading } </h3>
      { product ?
        <Slider className="react-slider" { ...settings }>
          { product.map((val) => (
            <div className="each-slid" key={ val._id }>
              <Card className="each-card">
                <Card.Img variant="top" />
                <Link to={ `/shop/product/${ val._id }` }  >
                  <img src={ baseURL + val.image[0] } alt="" width="100%" height="280" />
                </Link>
                <Card.Body>
                  <Card.Title >
                    <Row>
                      <Col xs="9" style={ { textAlign: "left" } }>
                        <span className="price"> <small>$</small>{ val.price } </span>

                        <p>{ val.name } </p>
                      </Col>
                      <Col xs="2" className="mt-3">
                        <Link to={ `/shop/product/${ val._id }` }  >

                          <span className="cart_button">
                            <AiOutlineShoppingCart size={ 25 } color=" white" />
                          </span>
                        </Link>

                      </Col>
                    </Row>
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          )
          ) }
        </Slider> : <div className="text-center"><Spinner animation="border" variant="dark" /></div>
      }
    </div >
  );
};
export default ProductSlider;
