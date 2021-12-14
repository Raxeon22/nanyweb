import React from 'react';
import { Form , Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar'

const Step3 = () => {
    return(
        <>
        <Navbar/>
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
              <h5>Order Details</h5>
              <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" placeholder="Enter your Quantity" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Order Note(Optional)</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="" />
                </Form.Group>
              </Form>
              <Link to="/order/step2">
              <Button >previous</Button>
              </Link>
               <Link to="/thankyou"> 
              <Button className="float-end">Submit</Button>
              </Link>
          </div>  
        </div>
        </>
    )
}
export default Step3;