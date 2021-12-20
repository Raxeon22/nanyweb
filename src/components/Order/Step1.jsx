import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import baseURL from "../../middleware/BaseURL";
import Action from "../../middleware/API";
const Step1 = (props) => {
  const [product, setproduct] = useState(props.location.state.product);
  const [order, setorder] = useState({
    fname: "",
    email: "",
    lname: "",
    product: props.location.state.product._id,
    quantity: props.location.state.quantity,
    color: props.location.state.color,
  });

  // async function getproduct() {
  //   const response = await Action.get(
  //     "/product?id=" + localStorage.getItem("data"),
  //     {}
  //   );

  //   if (response.data.success == true) {
  //     // console.log(response.data.data);
  //     setproduct(response.data.data);
  //   } else {
  //   }
  // }

  useEffect(async () => {
    // await setorder({ ...order, product: product.data._id });
    // await setorder({ ...order, quantity: product.quantity });
  }, [1]);

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
            <div class="stepper-item ">
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
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Joe"
                value={order.fname}
                onChange={(e) => {
                  setorder({ ...order, fname: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Wash"
                value={order.lname}
                onChange={(e) => {
                  setorder({
                    ...order,
                    lname: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="@"
                value={order.email}
                onChange={(e) => {
                  setorder({ ...order, email: e.target.value });
                }}
              />
            </Form.Group>
          </Form>

          {/* <Link to="/order/step2" state={order}> */}
          <Link
            to={{
              pathname: "/order/step2",
              state: {
                order,
              },
            }}
            // onClick={() => {
            //   console.log(order);
            //   localStorage.setItem("data", JSON.stringify(order));
            // }}
          >
            <Button className="float-end">next</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Step1;
