import React from 'react';
import { Form , Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Step3 = () => {
    return(
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
                <Form.Group className="mb-3" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Joe" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Wash" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="@" />
                </Form.Group>
              
              </Form>
              <Link to="/order/step2">
              <Button >previous</Button>
              </Link>
               <Link to="/"> 
              <Button className="float-end">Submit</Button>
              </Link>
          </div>  
        </div>
    )
}
export default Step3;