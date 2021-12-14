import React from 'react';
import { Form , Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar'

const Step2 = () => {
    return( <>
             <Navbar/>
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
              <h5>Shipping Details</h5>
              <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Address" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Country" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter your City" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Postal Code" />
                </Form.Group>
              
              </Form>
              <Link to="/order/step1">
              <Button >previous</Button>
              </Link>
               <Link to="/order/step3"> 
              <Button className="float-end">next</Button>
              </Link>
          </div>  
        </div>
        </>
    )
}
export default Step2;