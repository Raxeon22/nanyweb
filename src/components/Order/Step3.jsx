import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Action from "../../middleware/API";
import { useHistory } from "react-router-dom";


const Step3 = (props) => {
  console.log(props.location.state.product);  
  let history = useHistory();
  
  if(!props.location.state){
    history.push('/shop')
  }
  
  const [order, setorder] = useState({
    order_note: "",
  });

  const postorder = async (data) => {
    const payload = {
      order: Object.assign(props.location.state.order, order),
      product: props.location.state.product,
    };
    console.log(payload);
    const response = await Action.post("/order", payload);

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
              <Form.Label>Order Note(Optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder=""
                onChange={(e) => {
                  setorder({ ...order, order_note: e.target.value });
                }}
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
              postorder();
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
