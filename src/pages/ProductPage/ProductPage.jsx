import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import baseURL from "../../middleware/BaseURL";
import { Row, Col, Container, Button, Tabs, Tab } from "react-bootstrap";
// import ProductPageSlider from "../../components/Shop/Product-page/ProductPageSlider";
import ProductSlider from "../../components/Shop/ProductSlider";
import {
  FaFacebook,
  FaStar,
  FaShoppingCart,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";

const ProductPage = (props) => {
  const [product, setproduct] = useState(props.location.state.val);

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState();

  if (quantity < 1) {
    alert("quantity cannot be in minus");
  } else if (quantity > product.quantity) {
    alert("Quantity Exceed");
  }

  const variants = [
    {
      color: "red",
    },
    {
      color: "blue",
    },
    {
      color: "green",
    },
  ];

  const star = (num) => {
    const rating = [];
    for (var i = 0; i < num; i++) {
      rating.push(<FaStar />);
    }
    return rating;
  };
  return (
    <>
      <Navbar header={false} shop={false} />
      <Container>
        <Row className="indiv-product">
          <Col xs="12" lg="5" md="6">
            <img src={baseURL + product.image} width="100%" height="280" />
          </Col>
          <Col xs="12" lg="7" md="6" className="product-about">
            <h4 className="product-name">{product.name}</h4>
            <p className="instock">
              {product.quantity > 0 ? "In Stock" : "Out Of Stock"}
            </p>
            <div className="d-flex mt-2">
              <span className="mt-1 ratings">{star(product.star)}</span>
            </div>
            <p className="price mt-2">
              price: <b>{product.price + "$"}</b>
            </p>
            <div className="color d-flex">
              <p className="mt-2 mb-0 p-0"> color :</p>
              {product.color.map((value) => {
                return (
                  <span
                    id="color"
                    style={{
                      backgroundColor: value,
                      border: "black 2px solid",
                    }}
                    className=" rounded-circle m-1"
                    onClick={(e) => {
                      e.target.style =
                        " background-color:" +
                        value +
                        "; border: 5px solid black;";
                      setColor(value);
                    }}
                  ></span>
                );
              })}
            </div>
            <div className="quantity d-flex">
              <span onClick={() => setQuantity(quantity + 1)}>
                {" "}
                <AiOutlinePlus />{" "}
              </span>
              <p className="p-2"> {quantity} </p>
              <span onClick={() => setQuantity(quantity - 1)}>
                <AiOutlineMinus />{" "}
              </span>
            </div>{" "}
            <br />
            <Link
              to={{
                pathname: "/order/step1",
                state: {
                  product,
                  color,
                  quantity,
                },
              }}
            >
              <Button
              // onClick={() => {
              //   localStorage.setItem(
              //     "data",
              //     JSON.stringify({
              //       data: product,
              //       color: color,
              //       quantity: quantity,
              //     })
              //   );
              // }}
              >
                {" "}
                <FaShoppingCart className="m-1" /> Order Now
              </Button>
            </Link>
            <br />
            <br />
            <Button
              onClick={() => {
                if (
                  localStorage.getItem("order")
                    ? localStorage.getItem("order").length
                    : -1 > 0
                ) {
                  const content = JSON.parse(localStorage.getItem("order"));
                  product = Object.assign(product, {
                    quantity: quantity,
                    color: color,
                  });
                  content.push(product);
                  localStorage.setItem("order", JSON.stringify(content));
                } else {
                  product = Object.assign(product, {
                    quantity: quantity,
                    color: color,
                  });

                  localStorage.setItem("order", JSON.stringify([product]));
                }
              }}
            >
              Add to cart
            </Button>
            <div className="social-icons mt-5">
              <FaFacebook size="25" color="blue" className="m-1" />
              <FaTwitter size="25" color="primary" className="m-1" />
              <FaLinkedin size="25" color="gray" className="m-1" />
              <FaInstagram size="25" color="red" className="m-1" />
            </div>
          </Col>
        </Row>
        <div className="product-details">
          <Tabs defaultActiveKey="description">
            <Tab eventKey="description" title="Description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque
                voluptatibus impedit nemo, porro totam. Vel blanditiis adipisci
                commodi facere deleniti rerum molestias consectetur?
              </p>
            </Tab>

            <Tab eventKey="policy" title="Return Policy">
              <p>return policy</p>
            </Tab>
          </Tabs>
        </div>
      </Container>
      <ProductSlider heading="related products" />
    </>
  );
};
export default ProductPage;
