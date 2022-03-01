import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useHistory } from "react-router-dom";
import Footer from '../../components/Footer'


const Step2 = (props) => {


  let history = useHistory();
  const [error, setError] = useState(false);


  const [order, setorder] = useState({
    address: null,
    city: null,
    country: null,
    postalCode: null,
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
              <div className="step-name">étape 1 </div>
            </div>
            <div className="stepper-item completed active">
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
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                type="text"
                value={ order.address }
                onChange={ (e) => {
                  setorder({ ...order, address: e.target.value });
                } }
                placeholder="entrez votre adresse"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ville</Form.Label>
              <Form.Control
                required
                type="text"
                value={ order.city }
                onChange={ (e) => {
                  setorder({ ...order, city: e.target.value });
                } }
                placeholder="entrez votre ville"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>de Campagne</Form.Label>
              <Form.Control
                required
                type="text"
                value={ order.country }
                onChange={ (e) => {
                  setorder({ ...order, country: e.target.value });
                } }
                placeholder="entrez votre campagne"
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Code postal</Form.Label>
              <Form.Control
                required
                type="text"
                value={ order.postalCode }
                onChange={ (e) => {
                  setorder({ ...order, postalCode: e.target.value });
                } }
                placeholder="entrez votre code postal"
              />
            </Form.Group>
            { error ? <small className="text-center text-danger mb-1"> Tous les champs sont requis</small> : null }
          </Form>


          <Link to="/order/step1">
            <Button>Arrière</Button>
          </Link>

          <Button className="float-end " type="submit" onClick={ (e) => {
            e.preventDefault()
            // setSpin(
            //   <Spinner
            //     as="span"
            //     animation="border"
            //     size="sm"
            //     role="status"
            //     className="mx-4"
            //   />)
            if (order.address && order.city && order.country && order.postalCode) {
              history.push({
                pathname: "/order/step3",
                state: {
                  order: Object.assign(props.location.state ? props.location.state.order : null, order),
                  product: props.location.state ? props.location.state.product : "",
                },
              })

            } else {
              setError(true)
            }


          } }> suivante
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );

};
export default Step2;
