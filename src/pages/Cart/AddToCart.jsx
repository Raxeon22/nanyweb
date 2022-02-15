import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import HeadPhones from "../../assets/headphones.jpg";
import SelfieStick from "../../assets/selfie-stick.jpg";
import Speakers from "../../assets/speakers.jpg";
import { Link } from "react-router-dom";
import baseURL from "../../middleware/BaseURL";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


const cartDetails = [
  {
    image: HeadPhones,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, possimus.",
    price: "$60",
    quantity: "2",
    total: "$120",
  },
  {
    image: SelfieStick,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, possimus.",
    price: "$60",
    quantity: "1",
    total: "$60",
  },
  {
    image: Speakers,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, possimus.",
    price: "$80",
    quantity: "3",
    total: "$320",
  },
];
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


  const getcart = (value, index) => {
    value.splice(index, 1);

    localStorage.setItem("order", JSON.stringify(value));
  };


  return (
    <>
      <Navbar shop={ true } Homelink="home" />

      <Container>
        <div className="shopping-cart">
          <h1>shopping cart</h1>
          <div className="d-none d-md-block">
            <Row className="items-heading ">
              <Col lg="8" md="8">
                <p>Products</p>
              </Col>
              <Col lg="1" md="1">
                <p>Price</p>
              </Col>
              <Col lg="1" md="1">
                <p>Quantity</p>
              </Col>
              <Col lg="1" md="1">
                <p>Color</p>
              </Col>
              <Col lg="1" md="1">
                <p>Total</p>
              </Col>
            </Row>
          </div>
          <hr />

          { data.map((value, index) => {


            netamount += (value.price * value.quantity)

            return (
              <>
                <Row className="each-item">
                  <Col lg="1" md="1" xs="12" className="mt-4">
                    <span
                      onClick={ () => {
                        getcart(data, index);
                      } }
                    >
                      &times;
                    </span>
                  </Col>
                  <Col lg="2" md="2" xs="6">
                    <img src={ baseURL + value.image[0] } alt="" />
                  </Col>
                  <Col lg="5" md="5" xs="5">
                    { " " }
                    <p>{ value.name }</p>{ " " }
                  </Col>
                  <Col lg="1" md="1" xs="4">
                    { " " }
                    <p>{ value.price }</p>
                  </Col>
                  <Col lg="1" md="1" xs="4">
                    <div className="quantity d-flex">
                      <span
                        onClick={ () => {
                          // let qua = Quantity;
                          Quantity[index] = Quantity[index] + 1
                          // qua[index] =qua[index]+1;
                          // console.log(qua[index]);
                          // setQuantity(Quantity) 
                          // Quantity[index] = Quantity[index] > 0 ? Quantity[index] + 1:(Quantity[index] = 2);
                          console.log('====================================');
                          // console.log(Quantity);
                          console.log('====================================');
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
                          // const qua = Quantity;

                          // qua[index] =qua[index]-1;
                          // console.log(qua[index]);
                          Quantity[index] = Quantity[index] - 1

                          // setQuantity(Quantity) 
                          // Quantity[index] =
                          //   Quantity[index] > 0
                          //     ? Quantity[index] - 1
                          //     : (Quantity[index] = 1);
                        } }
                      >
                        <AiOutlineMinus />{ " " }
                      </span>
                    </div>
                  </Col>
                  <Col lg="1" md="1" xs="4">
                    <>

                      <div>

                        <Form.Select className='mt-3' name="cars" id="cars">
                          { value.color.map((item) => {
                            console.log(item.name);
                            return <option onSelect={ color[index] = item }> { item.name }</option>

                          }) }

                        </Form.Select>
                      </div>
                    </>
                  </Col>
                  <Col lg="1" md="1" xs="4">
                    { " " }
                    <p>{ Quantity[index] ? value.price * Quantity[index] : value.price }</p>{ " " }
                  </Col>
                </Row>
                <hr />
              </>
            );
          }) }
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
    </>
  );
};
export default AddToCart;
