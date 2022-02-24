import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import baseURL from "../../middleware/BaseURL";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Footer from "../../components/Footer"



const AddToCart = () => {
  const [total, settotal] = useState([]);
  const [data, setdata] = useState([]);
  const [Quantity, setQuantity] = useState([]);
  const [payload, setpayload] = useState(data);
  let color = [];
  let netamount = 0

  useEffect(async () => {

    setdata(await JSON.parse(localStorage.getItem("order")));

  }, []);
  console.log(data);

  const getcart = async (value, index) => {
    value.splice(index, 1);

    localStorage.setItem("order", JSON.stringify(value));
    setdata(await JSON.parse(localStorage.getItem("order")));

  };


  return (
    <>
      <Navbar shop={ true } Homelink="home" />

      <Container>
        <div className="shopping-cart">
          <h1>shopping cart</h1>
          <div className="d-none d-lg-block">
            <Row className="items-heading ">
              <Col lg="3" md="3">
                <p>Image</p>
              </Col>
              <Col lg="5" md="5">
                <p>Product Name</p>
              </Col>
              <Col lg="1" md="1">
                <p>Unit Price</p>
              </Col>
              <Col lg="1" md="1">
                <p>Qty</p>
              </Col>
              <Col lg="1" md="1">
                <p>Subtotal</p>
              </Col>
              <Col lg="1" md="1">
                <p>Action</p>
              </Col>
            </Row>
          </div>
          <hr />

          { (data ? data.length : [].length) > 0 ? (data.map((value, index) => {


            netamount += (value.price * value.quantity)
            Quantity[index] = value.quantity

            return (
              <>
                <Row className="each-item">
                  <Col lg="3" md="3" xs="6">
                    <img src={ baseURL + value.image } alt="" />
                  </Col>
                  <Col lg="5" md="6" xs="5">
                    <small>{ value.name }</small><br />
                    <small>color: { value.color }</small><br />
                    <small>size: { value.size }</small><br />
                  </Col>
                  <Col lg="1" md="3" xs="4">
                    { " " }
                    <p>{ value.price }</p>
                  </Col>
                  <Col lg="1" md="3" xs="4">
                    <div className="quantity d-flex">
                      {/* <span
                        onClick={ () => {
                          const qua = [...Quantity];
                          qua[index] = (qua[index] ? qua[index] : 1) + 1;
                          console.log(qua[index] + 1);
                          setQuantity(qua)
                          // setQuantity([...Quantity, Quantity[index] + 1])
                          // console.log(Quantity)
                        } }
                      >
                        { " " }
                        <AiOutlinePlus />{ " " }
                      </span> */}
                      <p className="p-2">
                        { " " }
                        { Quantity[index] > 0 ? Quantity[index] : 1 }{ " " }
                      </p>
                      {/* <span
                        onClick={ () => {
                          const qua = [...Quantity];
                          qua[index] = (qua[index] ? qua[index] : 1) - 1;
                          console.log(qua[index]);
                          setQuantity(qua)
                        } }
                      >
                        <AiOutlineMinus />{ " " }
                      </span> */}
                    </div>
                  </Col>

                  <Col lg="1" md="3" xs="4">
                    { " " }
                    <p>{ Quantity[index] ? value.price * Quantity[index] : value.price }</p>{ " " }
                  </Col>
                  <Col lg="1" md="3" xs="12" className="mt-4">
                    <span
                      onClick={ () => {
                        getcart(data, index);
                      } }
                    >
                      &times;
                    </span>
                  </Col>
                </Row>
                <hr />
              </>
            );
          })) : ((

            <center>

              <h2>No item in cart</h2>
            </center>
          )) }
          <Row className="justify-content-end text-center subtotal">
            <Col lg="3">
              <h4>
                Subtotal: ${ " " }
                {
                  netamount
                }
              </h4>
              <Link
                onClick={ () => {
                  console.log(data)
                } }
                to={ { pathname: "/order/step1", state: { product: data, total: netamount } } }
              >
                <Button variant="dark" className="w-100">
                  CHECK OUT
                </Button>
              </Link>
            </Col>
          </Row>
        </div >
      </Container >
      <Footer />
    </>
  );
};
export default AddToCart;