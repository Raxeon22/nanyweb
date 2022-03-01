import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Navbar from "../Navbar";
import Footer from '../../components/Footer'

import { useHistory } from "react-router-dom";

const Step1 = (props) => {


  let history = useHistory();
  if (!props.location.state) {

    history.push('/shop')
  }

  const [error, setError] = useState(false);
  const product = props.location.state ? props.location.state.product : []
  const content = [];

  product.map((val) => {
    return content.push({
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
    name: null,
    email: null,
    mobile: null,

  });


  return (
    <>
      <Navbar />
      <div className="order-now">
        <div className="forms">
          <div className="stepper-wrapper">
            <div className="stepper-item completed ">
              <div className="step-counter">1</div>
              <div className="step-name">étape 1 </div>
            </div>
            <div className="stepper-item ">
              <div className="step-counter">2</div>
              <div className="step-name">étape 2</div>
            </div>
            <div className="stepper-item ">
              <div className="step-counter">3</div>
              <div className="step-name">étape 3</div>
            </div>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label> Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="entrez votre nom"
                value={ order.name }
                onChange={ (e) => {
                  setorder({ ...order, name: e.target.value });
                } }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="entrez votre e-mail"
                value={ order.email }
                onChange={ (e) => {
                  setorder({ ...order, email: e.target.value });
                } }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>uméro de téléphone</Form.Label>
              <Form.Control
                type="Number"
                placeholder="XXXXXXXXXXXX"
                value={ order.mobile }
                onChange={ (e) => {
                  setorder({ ...order, mobile: e.target.value });
                } }
              />
            </Form.Group>
          </Form>
          { error ? <small className="text-center text-danger"> Tous les champs sont requis</small> : null }

          {/* <Link to="/order/step2" state={order}> */ }
          {/* <Link
            to={ {
              pathname: "/order/step2",
              state: {
                order: order,
                product: product,
              },
            } }> */}
          <Button className="float-end mt-3" onClick={ () => {

            if (order.name && order.email && order.mobile) {
              history.push({
                pathname: "/order/step2",
                state: {
                  order: order,
                  product: product,
                }
              })
            } else {
              setError(true)
            }



          } }> suivante</Button>
          {/* </Link> */ }
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Step1;
