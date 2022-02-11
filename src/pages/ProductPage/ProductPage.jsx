import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiShoppingBag } from 'react-icons/fi'
import Action from '../../middleware/API'
import { Row, Col, Container, Button, Tabs, Tab, Form } from "react-bootstrap";
import ProductPageSlider from "../../components/Shop/Product-page/ProductPageSlider";
import ProductSlider from "../../components/Shop/ProductSlider";
import {
  FaFacebook,
  FaShoppingCart,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { useParams } from "react-router-dom";
const ProductPage = (props) => {

  // let history = useHistory();
  // if (!props.location.state) {
  //   history.push('/shop')
  // }

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState([]);

  const { id } = useParams()
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await Action.get(`/product?_id=${ id }`)
        setProduct(data.data[0])

      } catch (error) {
        console.log(error)
      }

    }
    getProduct()

    const getColors = async () => {
      try {
        const { data } = await Action.get(`/color`)
        setColor(data.data)

      } catch (error) {
        console.log(error)
      }

    }
    getColors()
  }, [])


  if (quantity < 1) {
    alert("quantity cannot be in minus");
    setQuantity(1)
  } else if (quantity > product.quantity) {
    alert("Quantity Exceed");
    setQuantity(product.quantity)
  }
  return (
    <>
      <Navbar header={ false } shop={ false } />
      <Container>
        <Row className="indiv-product">
          <Col xs="12" lg="5" md="6">
            <ProductPageSlider images={ product.image } />
          </Col>
          <Col xs="12" lg="7" md="6" className="product-about">
            <h4 className="product-name">{ product.name }</h4>
            <hr />
            {/* <p className="instock">
              { product.quantity > 0 ? "In Stock" : "Out Of Stock" }
            </p> */}
            <div className="d-flex">
              <span className="product_key mt-2">
                price:
              </span>
              <h2>{ product.price }<small>$</small> </h2>
            </div>
            <div className="">
              <span className="product_key"> color:
                {/* { color.map((color) => {
                  return (
                    <span style={ { backgroundColor: color.code } }></span>

                  )

                }) } */}
              </span>
              <Form.Select size="sm" className='mt-3' style={ { width: ' auto ' } }>
                { color.map((value) => {
                  return (
                    <option>{ value.color }</option>
                  );
                }) }
              </Form.Select>
              {/* { product.color.map((value) => {
                return (
                  <span
                    id="color"
                    style={ {
                      backgroundColor: value,
                      border: "black 2px solid",
                    } }
                    className=" rounded-circle m-1"
                    onClick={ (e) => {
                      e.target.style =
                        " background-color:" +
                        value +
                        "; border: 5px solid black;";

                      setColor(value);
                    } }
                  ></span>
                );
              }) } */}
            </div>
            <div className="d-flex mt-2">
              <span className="product_key mt-2">
                size:
              </span>
              <h5 className="mt-2">{ product.size } </h5>
            </div>
            <div className="quantity d-flex">
              <span className="product_key mt-2">Quantity:</span>
              <i onClick={ () => setQuantity(quantity + 1) }>

                <AiOutlinePlus />
              </i>
              <p className="p-2"> { quantity } </p>
              <i onClick={ () => setQuantity(quantity - 1) }>
                <AiOutlineMinus />
              </i>
            </div>

            <hr />
            <div className="">
              <Link
                onClick={ () => {
                  product.quantity = quantity;
                  product.color = color ? color : product.color[0];
                } }
                to={ {
                  pathname: "/order/step1",
                  state: {
                    product: [product],
                  },
                } }
              >
                <Button >
                  { " " }
                  <FaShoppingCart className="m-1" />  Order Now
                </Button>
              </Link>
              <br />
              <br />
              <Button
                onClick={ () => {
                  if (
                    localStorage.getItem("order")
                      ? localStorage.getItem("order").length
                      : -1 > 0
                  ) {
                    const content = JSON.parse(localStorage.getItem("order"));
                    // product = Object.assign(product, {
                    //   quantity: quantity,
                    //   color: color,
                    // });
                    content.push(product);
                    localStorage.setItem("order", JSON.stringify(content));
                  } else {
                    product = Object.assign(product, {
                      quantity: quantity,
                      color: color,
                    });

                    localStorage.setItem("order", JSON.stringify([product]));
                  }
                } }
              >
                <FiShoppingBag className="m-1" /> Add to cart
              </Button>
            </div>
            {/* <div className="social-icons mt-5">
              <FaFacebook size="25" color="blue" className="m-1" />
              <FaTwitter size="25" color="primary" className="m-1" />
              <FaLinkedin size="25" color="gray" className="m-1" />
              <FaInstagram size="25" color="red" className="m-1" />
            </div> */}
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
