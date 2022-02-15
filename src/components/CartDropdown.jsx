import React, { useState, useRef, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import baseURL from "../middleware/BaseURL";
import "../css/Shop.css";
const items = 2;

const Cart = () => {
  const [isOpen, setisOpen] = useState(false);

  const [data, setdata] = useState([])
  const cartDropdown = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      setdata(JSON.parse(localStorage.getItem("order")))

    }, 100);
    return () => clearInterval(interval);
    // const data = JSON.parse(localStorage.getItem("order")) ? JSON.parse(localStorage.getItem("order")) : [];
  })
  const height = data.length > 0 ? "400px" : "auto";
  // console.log(JSON.parse(localStorage.getItem("order")));
  // console.log(JSON.parse(localStorage.getItem("order")));
  // useEffect(() => {
  //     const handleEvent = (e) => {
  //       if (cartDropdown.current && !cartDropdown.current.contains(e.target)) {
  //         setisOpen(false);
  //       }
  //     };
  //     document.addEventListener("mousedown", handleEvent);

  //     return () => {
  //       document.removeEventListener("mousedown", handleEvent);
  //     };
  //   });

  return (
    <div className="cart">
      <span onClick={ () => setisOpen((prev) => !prev) }>
        { " " }
        <AiOutlineShoppingCart size={ 30 } />
        <span className="items d-none d-lg-block">{ data.length }</span>{ " " }
      </span>

      { isOpen ? (
        <Card
          ref={ cartDropdown }
          className="cart-dropdown animate__animated animate__fadeInUp animate__fast"
          style={ { height: height } }
        >
          <Card.Header>
            <h5>
              My Cart{ " " }
              <span onClick={ () => setisOpen((prev) => !prev) }> &times;</span>
            </h5>
          </Card.Header>
          <Card.Body className="dropdown">
            { (data.length > 0 ? data : []).map((item) => {
              return (
                <Row className="each-item">

                  <Col xs="3" className="cartdropdown">
                    <img
                      src={ baseURL + item.image[0] }
                      height="60"
                      width="60"
                      alt=""
                    />
                  </Col>
                  <Col xs="9">
                    <h6> { item.name } </h6>
                    price: { item.price }
                  </Col>
                </Row>
              );
            }) }


            <Link
              onClick={ () => {
                data.map((item, index) => {

                  data[index].quantity = 1;

                  data[index].color = data[index].color[0] ? data[index].color[0] : " "


                });
                // console.log(data)
              } }
              to={ { pathname: "/order/step1", state: { product: data } } }
            >
              <Button className="mt-3" variant="light">
                CHECK OUT
              </Button>
            </Link>
            <Link to="/cart">
              <Button className="mt-1" variant="light">
                VIEW ALL CART
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ) : null }
    </div>
  );
};
export default Cart;
