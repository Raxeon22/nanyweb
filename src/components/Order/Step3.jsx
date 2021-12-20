import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Action from "../../middleware/API";
import { useHistory } from "react-router-dom";
const Step3 = (props) => {
  let history = useHistory();
  const [order, setorder] = useState({
    mobile: "",
    postalCode: 0,
  });

  const postorder = async (data) => {
    const response = await Action.post("/order", data);
    console.log(response);
    if (response.data.success == true) {
      history.push("/thankyou");
    }
  };
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
            <div class="stepper-item completed ">
              <div class="step-counter">2</div>
              <div class="step-name">step 2</div>
            </div>
            <div class="stepper-item completed active ">
              <div class="step-counter">3</div>
              <div class="step-name">step 3</div>
            </div>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                value={order.mobile}
                onChange={(e) => {
                  setorder({ ...order, mobile: e.target.value });
                }}
                placeholder="Joe"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Postal code</Form.Label>
              <Form.Control
                type="Number"
                onChange={(e) => {
                  setorder({ ...order, postalCode: e.target.value });
                }}
                placeholder="Joe"
              />
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Wash" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="@" />
            </Form.Group> */}
          </Form>
          <Link to="/order/step2">
            <Button>previous</Button>
          </Link>

          <Button
            className="float-end"
            onClick={() => {
              postorder(Object.assign(props.location.state, order));
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};
export default Step3;
