import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import Iframe from 'react-iframe'
const AnyReactComponent = ({ text }) => <div>{text}</div>


class ContactMain extends Component {
    render() {
        return (
            <div>


                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={12} sm={12} >
                                <h1 className="ContactName ">Quick Connect</h1>
                                <hr/>

                                <Form>

                                    <Form.Group>
                                        <Form.Label className="serviceDescription " >Subject</Form.Label>
                                        <Form.Control type="text"  />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="serviceDescription" >Name</Form.Label>
                                        <Form.Control type="text"  />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="serviceDescription" >Email Address</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="serviceDescription" >Message</Form.Label>
                                        <Form.Control  as="textarea" rows="3" />
                                    </Form.Group>


                                    <Button variant="primary btn-block" type="submit">
                                        Submit
                                    </Button>
                                </Form>

                            </Col>
                            <Col lg={6} md={12} sm={12} className="Text-center">

                                <h1 className="AddName">Address</h1>
                                <hr/>
                                <div className="addMain ">
                                <p className="addDescription" > #Technical Road (Near Pubali Bank LTD.), South Surma, Sylhet</p>
                                <p className="addDescription" > <FontAwesomeIcon  icon={faEnvelope} /> contact.mrsnetwork@gmail.com</p>
                                <p className="addDescription" > <FontAwesomeIcon  icon={faPhone} /> +8801766340436</p>
                                </div>

                            </Col>


                        </Row>
                    <Row>
                    <Col lg={12} md={12} sm={12} className="Text-center">

                            <h1 className="AddName">Map</h1>
                            <hr/>
                        <div className="mt-3">
                        <Iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3639674669444!2d91.86005341452395!3d24.885563750380623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ab9e93a34ff7%3A0x263b7b1797367f67!2sMRS%20Network!5e0!3m2!1sen!2sbd!4v1612004546936!5m2!1sen!2sbd"
                            width="1200" height="400" frameBorder="0" style="border:0;" allowFullScreen=""
                            aria-hidden="false" tabIndex="0"></Iframe>
                        </div>

                    </Col>
                    </Row>
                    </Container>
                </Fragment>


            </div>
        );
    }
}

export default ContactMain;