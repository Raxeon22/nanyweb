import React , {useState, useEffect} from 'react';
import {Button , Row , Col , Nav , Container , Carousel , Tabs , Tab , Collapse , Form , Card } from 'react-bootstrap';
import axios from 'axios';

const Task = () => {
    const [title , setTitle] = useState([])
    const [inputValue , setInputValue] = useState('')
    const [search , setSearch] = useState('')
    const [search2 , setSearch2] = useState('')
    const [empty , setEmpty] = useState()
    const [inWookie , setInWookie] = useState([])
    https://swapi.dev/api/films/?format=wookiee
    useEffect(()=> {
        async function getData(){
         const res = await axios.get(`https://swapi.dev/api/films/?search=${search}&format=json`);
        
         setTitle(res.data.results)
         setEmpty(res.data.results)
        
        }
     getData()
     async function getDataInWookie(){
        const resInWookie = await axios.get(`https://swapi.dev/api/films/?search=${search}&format=wookiee`);
       
        setInWookie(resInWookie.data.oaoohuwhao)
        //console.log(res.data.results)
       
       
       }
    getDataInWookie()

    }, [search2]) 

    const handleName = (e) =>{
    
      setInputValue(e.target.value)
    }
    console.log(inWookie)
    console.log(title)
    return(
        <div className="center">
        <Container>
            <Row className="justifycontent-center text-center ">
              <Col xs="12">
               < Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleName}>
                    <Form.Label>Enter a Movie Name</Form.Label>
                    <Form.Control className="custom-input" type="text" placeholder="A New Hope" />
                    <Button  className="mt-2 " variant="danger" onClick={()=>{
                      setSearch(inputValue.toString())
                      setSearch2(inputValue.toString())
                      console.log(search)
                      console.log(search2)
                    }}>get release data and opening crawl</Button>
                </Form.Group>
              </Col>
            </Row>
            <Row className="overflow-auto">
           {
                search ? title.map((val ,index)=>{
                       return(
                        
                        <Col xs="12" md="6" className="mt-4" key={index}>
                        <Card>
                      
                        <Card.Body>
                            <Card.Title>{val.title} </Card.Title>
                            <hr/>
                            <h5>Release Date</h5>
                            <p>{val.release_date} </p>
                            <h5> Opening Crawl</h5>
                            <p> {val.opening_crawl} </p>
                        </Card.Body>
                            </Card>
                        </Col>
                   
                        
                       )
                   })
                   : null

                  
                   
            }
           
            {
              empty.length == 0 ?  <h3 className="text-center mt-5 "> error Movie not found </h3> : null
            }
            </Row>
        </Container>
        </div>
    )
}

export default Task;