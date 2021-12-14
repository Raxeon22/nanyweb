import React from 'react';
import { Form , Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar'

const Step1 = () => {
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
            <div class="stepper-item ">
                <div class="step-counter">2</div>
                <div class="step-name">step 2</div>
            </div>
            <div class="stepper-item ">
                <div class="step-counter">3</div>
                <div class="step-name">step 3</div>
            </div>
            </div>
              <h5>Personal Information</h5>
              <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Joe" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="joe@email.com" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="XXXXXXXXXX" />
                </Form.Group>
              
              </Form>
             
               <Link to="/order/step2"> 
              <Button className="float-end">next</Button>
              </Link>
          </div>  
        </div>
        </>
    )
}
export default Step1;