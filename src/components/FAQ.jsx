import React , {useState} from 'react';
import { Row , Col , Container , Collapse } from 'react-bootstrap';
import FAQImg from '../assets/faq-bg.jpg';
import {AiOutlineMinus , AiOutlinePlus} from "react-icons/ai";



const FAQ =()=>{
    const [faqOpen , setFaqOpen] = useState(false);
    const [faqOpen2 , setFaqOpen2] = useState(false);
    const [faqOpen3 , setFaqOpen3] = useState(false);
    const [faqOpen4 , setFaqOpen4] = useState(false);
    const [faqOpen5 , setFaqOpen5] = useState(false);
    const FaqContent = [{
       question : 'How long This Site live?',
       answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
       state : faqOpen,
       setState : setFaqOpen
    },
    {
       question : 'Can I install anything i want on there?',
       answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
       state : faqOpen2,
       setState : setFaqOpen2
    },
    {
       question : 'Can i change the domain you me?',
       answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
       state : faqOpen3,
       setState : setFaqOpen3
    },
    {
       question : 'How can I migrate to another site?',
       answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
       state : faqOpen4,
       setState : setFaqOpen4
    },
    {
       question : 'How many sites i can create at once?',
       answer : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.',
       state : faqOpen5,
       setState : setFaqOpen5
    }
   ]

    return (
    <div id="faq" className="faq">
        <Container>
            <Row>
                <Col xs="12" md="6">
                    <img src={FAQImg} alt="" width="100%" height="500" />
                </Col>
                <Col xs="12" md="6" className="heading" >
                    <strong >FAQ</strong>

                    <div className="Qsection">
                        {FaqContent.map(( val , index)=>{
                        return (
                         <div className="eachQ " onClick={()=> val.setState(!val.state)} aria-expanded={val.state}>
                         <h6 className="font-bolder"> {val.question} <span className="float-end">{ val.state ? <AiOutlineMinus size={23}/> : <AiOutlinePlus size={23}/> } </span></h6> 

                            <Collapse in={val.state} >
                                <div className="">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.</p>
                                </div>
                            </Collapse>

                        </div>)
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
export default FAQ; 