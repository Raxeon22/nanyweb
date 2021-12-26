import React, { useEffect, useState } from "react";

import { Row, Col, Container, Collapse } from "react-bootstrap";
import FAQImg from "../../assets/faq-bg.jpg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Action from "../../middleware/API";
import baseURL from "../../middleware/BaseURL";

const FAQ = () => {
  const [faqOpen2, setFaqOpen2] = useState(false);
  const [faqOpen3, setFaqOpen3] = useState(false);
  const [faqOpen4, setFaqOpen4] = useState(false);
  const [faqOpen5, setFaqOpen5] = useState(false);
  const FaqContent = [
    // {
    //   question: "How long This Site live?",
    //   answer:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.",
    //   state: faqOpen,
    //   setState: setFaqOpen,
    // },
    {
      question: "Can I install anything i want on there?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.",
      state: faqOpen2,
      setState: setFaqOpen2,
    },
    {
      question: "Can i change the domain you me?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.",
      state: faqOpen3,
      setState: setFaqOpen3,
    },
    {
      question: "How can I migrate to another site?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.",
      state: faqOpen4,
      setState: setFaqOpen4,
    },
    {
      question: "How many sites i can create at once?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odio obcaecati placeat ut enim, et alias officia officiis expedita veritatin.",
      state: faqOpen5,
      setState: setFaqOpen5,
    },
  ];

  const [faq, setfaq] = useState([]);
  const [count, setcount] = useState(1);

  async function fetchfaqdata() {
    const response = await Action.get("/faq", {});

    if (response.data.success == true) {
      setfaq(response.data.data);
      faq.map((item, index) => {
        item.state = false;
      });
      // console.log(faq);
    } else {
      // setfaq([]);
    }
  }

  useEffect(async () => {
    fetchfaqdata();
  }, []);
  async function showanswer(parent, answer) {
    const container = document.createElement("div");
    container.append("<h1> </h1>");
  }
  return (
    <div id="faq" className="faq">
      <Container>
        <Row>
          <Col xs="12" md="6">
            <img src={FAQImg} alt="" width="100%" height="500" />
          </Col>
          <Col xs="12" md="6" className="heading">
            <strong>FAQ</strong>

            <div className="Qsection">
              {faq.map((val, index) => {
                return (
                  <div
                    className="eachQ "
                    onClick={(e) => {
                      // val.state = !val.state;
                      faq[index].state = !faq[index].state;
                    }}
                    aria-expanded={val.state}
                  >
                    <h6 className="font-bolder">
                      {" "}
                      {val.question}{" "}
                      <span className="float-end" style={{ cursor: "pointer" }}>
                        {
                          // console.log(val)
                          val.state ? (
                            <AiOutlineMinus size={23} />
                          ) : (
                            <AiOutlinePlus size={23} />
                          )
                        }{" "}
                      </span>
                    </h6>

                    <Collapse in={val.state}>
                      <div className="">
                        <p>{val.answer}</p>
                      </div>
                    </Collapse>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FAQ;
