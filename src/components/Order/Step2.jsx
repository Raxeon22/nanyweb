import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useHistory } from "react-router-dom";

const Step2 = (props) => {


  let history = useHistory();
  const [product, setproduct] = useState([]);
  
  const [order, setorder] = useState({
    address: "",
    city: "",
    country: "",
    postalCode: 0,
  });
  
if(!props.location.state){
  history.push('/shop')
}    
    return (
    <>
      <Navbar />
      <div className="order-now">
        <div className="forms">
          <div class="stepper-wrapper">
            <div class="stepper-item completed ">
              <div class="step-counter">1</div>
              <div class="step-name">step 1 </div>
            </div>
            <div class="stepper-item completed active">
              <div class="step-counter">2</div>
              <div class="step-name">step 2</div>
            </div>
            <div class="stepper-item ">
              <div class="step-counter">3</div>
              <div class="step-name">step 3</div>
            </div>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={order.address}
                onChange={(e) => {
                  setorder({ ...order, address: e.target.value });
                }}
                placeholder="Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={order.city}
                onChange={(e) => {
                  setorder({ ...order, city: e.target.value });
                }}
                placeholder="City"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                value={order.country}
                onChange={(e) => {
                  setorder({ ...order, country: e.target.value });
                }}
                placeholder="Country"
                />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>postal Code</Form.Label>
              <Form.Control
                type="text"
                value={order.postalCode}
                onChange={(e) => {
                  setorder({ ...order, postalCode: e.target.value });
                }}
                placeholder="Postal code"
                />
            </Form.Group>
          </Form>
          <Link to="/order/step1">
            <Button>previous</Button>
          </Link>
          <Link
            to={{
              pathname: "/order/step3",
              
              state: {
                order: Object.assign(props.location.state?props.location.state.order:"", order),
                product: props.location.state?props.location.state.product:"",
              },
            }}
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
    </>
  );
  
};
export default Step2;
