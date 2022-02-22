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
          <div className="d-none d-md-block">
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
                  <Col lg="5" md="5" xs="5">
                    <p>{ value.name }</p>
                    <p>color: { value.color }</p>
                    <p>size: { value.size }</p>
                  </Col>
                  <Col lg="1" md="1" xs="4">
                    { " " }
                    <p>{ value.price }</p>
                  </Col>
                  <Col lg="1" md="1" xs="4">
                    <div className="quantity d-flex">
                      <span
                        onClick={ () => {
                          const qua = [...Quantity];
                          qua[index] = (qua[index] ? qua[index] : 1) + 1;
                          console.log(qua[index]);
                          setQuantity(qua)
                        } }
                      >
                        { " " }
                        <AiOutlinePlus />{ " " }
                      </span>
                      <p className="p-2">
                        { " " }
                        { Quantity[index] > 0 ? Quantity[index] : 1 }{ " " }
                      </p>
                      <span
                        onClick={ () => {
                          const qua = [...Quantity];
                          qua[index] = (qua[index] ? qua[index] : 1) - 1;
                          console.log(qua[index]);
                          setQuantity(qua)
                        } }
                      >
                        <AiOutlineMinus />{ " " }
                      </span>
                    </div>
                  </Col>
                  {/* <Col lg="1" md="1" xs="4">
                    <>
                      <div>
                        <Form.Select className='mt-3' name="cars" id="cars">
                          { value.color.map((item) => {
                            
                            return <option onSelect={ color[index] = item }> { item }</option>
                          }) }
                        </Form.Select>
                      </div>
                    </>
                  </Col> */}
                  <Col lg="1" md="1" xs="4">
                    { " " }
                    <p>{ Quantity[index] ? value.price * Quantity[index] : value.price }</p>{ " " }
                  </Col>
                  <Col lg="1" md="1" xs="12" className="mt-4">
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
                  data.map((item, index) => {

                    data[index].quantity =
                      Quantity[index] > 0 ? Quantity[index] : 1;

                    data[index].color = color[index] ? color[index] : data[index].color[0]

                  });

                } }
                to={ { pathname: "/order/step1", state: { product: data, total: netamount } } }
              >
                <Button variant="dark" className="w-100">
                  CHECK OUT
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default AddToCart;