import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import baseURL from "../../middleware/BaseURL";
import Action from "../../middleware/API";
const Step1 = (props) => {
  console.log(props.location.state);
  console.log(props.location.state.data);
  const [product, setproduct] = useState(props.location.state.product);
  const content = [];
  if (props.location.state.data) {
    props.location.state.data.map((item) => {
      content.push({});
    });
  }

  const [order, setorder] = useState({
    name: "",
    email: "",
    mobile: 0,
    product: props.location.state.product._id,
    quantity: props.location.state.quantity,
    color: props.location.state.color,
    price: props.location.state.product.price,
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
              <Form.Label> Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                value={order.name}
                onChange={(e) => {
                  setorder({ ...order, name: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                value={order.email}
                onChange={(e) => {
                  setorder({ ...order, email: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Mobile"
                value={order.mobile}
                onChange={(e) => {
                  setorder({ ...order, mobile: e.target.value });
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
