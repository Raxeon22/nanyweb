import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Action from "../../middleware/API";
import { useHistory } from "react-router-dom";
import Footer from '../../components/Footer'



const Step3 = (props) => {
  const [spin, setSpin] = useState(false);

  let history = useHistory();

  if (!props.location.state) {
    history.push('/shop')
  }

  const [order, setorder] = useState({
    order_note: "",
  });

  const postorder = async (data) => {
    const payload = {
      order: Object.assign(props.location.state ? props.location.state.order : "", order),
      product: props.location.state ? props.location.state.product : "",
    }
    console.log(payload)
    const response = await Action.post("/order", payload);

    if (response.data.success === true) {
      history.push("/thankyou");
    } else {
      setSpin(false)
      alert('something went wrong, please try again later')
    }
  };
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
            <div className="stepper-item completed ">
              <div className="step-counter">2</div>
              <div className="step-name">étape 2</div>
            </div>
            <div className="stepper-item completed active ">
              <div className="step-counter">3</div>
              <div className="step-name">étape 3</div>
            </div>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Note de commande (facultatif)</Form.Label>
              <Form.Control
                as="textarea"
                rows={ 3 }
                placeholder=""
                onChange={ (e) => {
                  setorder({ ...order, order_note: e.target.value });
                } }
              />
            </Form.Group>
          </Form>
          <Link to="/order/step2">
            <Button>previous</Button>
          </Link>
          <Button className="float-end d-flex " onClick={ () => {

            postorder();
            setSpin(true)

          } }>submit
            { spin ? <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              className="mx-2 mt-1"
            /> : null }
          </Button>

        </div>
      </div>
      <Footer />
    </>
  );
};
export default Step3;
