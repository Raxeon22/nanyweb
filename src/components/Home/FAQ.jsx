import React, { useEffect, useState } from "react";
import { Row, Col, Container, Collapse, TabContent } from "react-bootstrap";
import FAQImg from "../../assets/faq-bg.jpg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";
const FAQ = () => {
  const [faq, setfaq] = useState([]);
  const [count, setcount] = useState([]);
  const [img, setimg] = useState();
  async function fetchfaqdata() {
    const response = await Action.get("/faq", {});
    if (response.data.success == true) {
      setfaq(response.data.data);
      faq.map((item, index) => {
        if (!img) {
          if (faq[index].image) {
            setimg(faq[index].image)
          }
        }

        const Count = [...count];
        Count[index] = false;
        setcount(Count);
      });
    } else {
      setfaq([]);
    }
  }

  const getsignforeachfaq = (index) => {
    const item = [...count];
    item[index] = item[index] ? false : true;
    setcount(item);
  };

  useEffect(async () => {
    fetchfaqdata();
  }, []);

  return (
    <div id="faq" className="faq">
      <Container>
        <Row>
          <Col xs="12" md="6">
            <img src={ FAQImg } alt="" width="100%" height="500" />
          </Col>
          <Col xs="12" md="6" className="heading">
            <strong>FAQ</strong>

            <div className="Qsection">
              { faq.map((val, index) => {
                return (
                  <div
                    className="eachQ "
                    onClick={ (e) => {
                      getsignforeachfaq(index);
                    } }
                    aria-expanded={ count[index] }
                  >
                    <h6 className="font-bolder">
                      { " " }
                      { val.question }{ " " }
                      <span className="float-end" style={ { cursor: "pointer" } }>
                        { count[index] ? (
                          <AiOutlineMinus size={ 23 } />
                        ) : (
                          <AiOutlinePlus size={ 23 } />
                        ) }{ " " }
                      </span>{ " " }
                    </h6>

                    <Collapse in={ count[index] }>
                      <div className="">
                        <p>{ val.answer }</p>
                      </div>
                    </Collapse>
                  </div>
                );
              }) }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FAQ;
