import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from '../../components/Footer'

import { useHistory } from "react-router-dom";

const Step1 = (props) => {


  let history = useHistory();
  if (!props.location.state) {

    history.push('/shop')
  }


  const [product, setproduct] = useState(props.location.state ? props.location.state.product : []);
  const content = [];

  product.map((val) => {
    content.push({
      product: val._id,
      quantity: val.quantity,
      color: props.location.state.color
        ? props.location.state.color
        : val.color,
      price: props.location.state.price
        ? props.location.state.price
        : val.price,
    });
  });

  // if (props.location.state.data) {
  //   props.location.state.data.map((item) => {
  //     content.push({});
  //   });
  // }

  const [order, setorder] = useState({
    name: "",
    email: "",
    mobile: 0,

  });

  useEffect(async () => {
    // await setorder({ ...order, product: product.data._id });
    // await setorder({ ...order, quantity: product.quantity });
  }, [1]);

  return (
    <>
      <Navbar />
      <div className="order-now">
        <div className="forms">
          <div className="stepper-wrapper">
            <div className="stepper-item completed ">
              <div className="step-counter">1</div>
              <div className="step-name">step 1 </div>
            </div>
            <div className="stepper-item ">
              <div className="step-counter">2</div>
              <div className="step-name">step 2</div>
            </div>
            <div className="stepper-item ">
              <div className="step-counter">3</div>
              <div className="step-name">step 3</div>
            </div>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label> Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                value={ order.name }
                onChange={ (e) => {
                  setorder({ ...order, name: e.target.value });
                } }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                value={ order.email }
                onChange={ (e) => {
                  setorder({ ...order, email: e.target.value });
                } }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Mobile"
                value={ order.mobile }
                onChange={ (e) => {
                  setorder({ ...order, mobile: e.target.value });
                } }
              />
            </Form.Group>
          </Form>

          {/* <Link to="/order/step2" state={order}> */ }
          <Link
            to={ {
              pathname: "/order/step2",
              state: {
                order: order,
                product: product,
              },
            } }

          >
            <Button className="float-end">next</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Step1;
