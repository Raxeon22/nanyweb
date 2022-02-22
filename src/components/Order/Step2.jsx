import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useHistory } from "react-router-dom";
import Footer from '../../components/Footer'


const Step2 = (props) => {


  let history = useHistory();
  const [product, setproduct] = useState([]);

  const [order, setorder] = useState({
    address: "",
    city: "",
    country: "",
    postalCode: 0,
  });

  if (!props.location.state) {
    history.push('/shop')
  }
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
            <div className="stepper-item completed active">
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
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={ order.address }
                onChange={ (e) => {
                  setorder({ ...order, address: e.target.value });
                } }
                placeholder="Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={ order.city }
                onChange={ (e) => {
                  setorder({ ...order, city: e.target.value });
                } }
                placeholder="City"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                value={ order.country }
                onChange={ (e) => {
                  setorder({ ...order, country: e.target.value });
                } }
                placeholder="Country"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>postal Code</Form.Label>
              <Form.Control
                type="text"
                value={ order.postalCode }
                onChange={ (e) => {
                  setorder({ ...order, postalCode: e.target.value });
                } }
                placeholder="Postal code"
              />
            </Form.Group>
          </Form>
          <Link to="/order/step1">
            <Button>previous</Button>
          </Link>
          <Link
            to={ {
              pathname: "/order/step3",

              state: {
                order: Object.assign(props.location.state ? props.location.state.order : "", order),
                product: props.location.state ? props.location.state.product : "",
              },
            } }
          // onClick={() => {
          //   localStorage.setItem(
          //     "data",
          //     Object.assign(JSON.parse(localStorage.getItem("data")), order)
          //   );
          // }}
          >
            <Button className="float-end">next</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );

};
export default Step2;
