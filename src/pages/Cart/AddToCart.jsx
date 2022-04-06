import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import baseURL from "../../middleware/BaseURL";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Footer from "../../components/Footer"

const AddToCart = () => {
  const [data, setdata] = useState([]);
  let [Quantity, setQuantity] = useState([]);
  let netamount = 0

  useEffect(() => {
    const getData = async () => {
      setdata(await JSON.parse(localStorage.getItem("order")));

    }
    getData()

  }, []);

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
          <h1>Caddie</h1>
          <div className="d-none d-lg-block">
            <Row className="items-heading ">
              <Col lg="3" md="3">
                <p>Image</p>
              </Col>
              <Col lg="5" md="5">
                <p>Nom du produit</p>
              </Col>
              <Col lg="1" md="1">
                <p>Prix ​​unitaire</p>
              </Col>
              <Col lg="1" md="1">
                <p>qualité</p>
              </Col>
              <Col lg="1" md="1">
                <p>total</p>
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
            console.log(Quantity)

            return (
              <>
                <Row className="each-item">
                  <Col lg="3" md="3" xs="6">
                    <img src={ baseURL + value.image } alt="" />
                  </Col>
                  <Col lg="1" md="3" xs="6" className="mt-2 d-block d-lg-none">
                    <span
                      onClick={ () => {
                        getcart(data, index);
                      } }
                    >
                      &times;
                    </span>
                  </Col>
                  <Col lg="5" md="6" xs="12">
                    <small>{ value.name }</small><br />
                    <small>couleur: { value.color }</small><br />
                    <small>size: { value.size }</small><br />
                    <small className="d-block d-lg-none">le prix: { value.price }</small>
                    <small className="d-block d-lg-none">qualité: { Quantity[index] }</small>
                    <small className="d-block d-lg-none">total: { Quantity[index] ? value.price * Quantity[index] : value.price }</small><br />
                  </Col>
                  <Col lg="1" md="3" className="d-none d-lg-block">
                    { " " }
                    <p>{ value.price }</p>
                  </Col>
                  <Col lg="1" md="3" className="d-none d-lg-block">
                    <div className="quantity d-flex">
                      {/* <span
                        onClick={ () => {
                          // const qua = [...Quantity];
                          // qua[index] = (qua[index] ? qua[index] : 1) + 1;
                          // console.log(qua[index] + 1);
                          // setQuantity(qua)
                          Quantity[index] = Quantity[index] + 1
                          console.log(Quantity)
                        } }
                      >
                        { " " }
                        <AiOutlinePlus />{ " " }
                      </span> */}
                      <p className="">
                        { " " }
                        { Quantity[index] }{ " " }
                      </p>
                      {/* <span
                        onClick={ () => {
                          // const qua = [...Quantity];
                          // qua[index] = (qua[index] ? qua[index] : 1) - 1;
                          // console.log(qua[index]);
                          // setQuantity(qua)
                          //value.quantity + 1
                          setQuantity(Quantity[index] = Quantity[index] - 1)
                          console.log(Quantity)
                        } }
                      >
                        <AiOutlineMinus />{ " " }
                      </span> */}
                    </div>
                  </Col>

                  <Col lg="1" md="3" xs="4" className="d-none d-lg-block">
                    { " " }
                    <p>{ Quantity[index] ? value.price * Quantity[index] : value.price }</p>{ " " }
                  </Col>
                  <Col lg="1" md="3" xs="1" className="mt-4 d-none d-lg-block">
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

              <h2>Aucun article dans le panier</h2>
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
                  Vérifier
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