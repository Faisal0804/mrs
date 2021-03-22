import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/esm/Container";
import {Button, Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faPhone, faSwatchbook} from "@fortawesome/free-solid-svg-icons";


class Contact extends Component {
    render() {
        return (
            <Fragment >

                <Container fluid={true} className="helpMain ">

                    <Row className="text-center ">
                        <Col lg={12} md={12} sm={12} >
                            <h1 className="helpMainTitle">Need Help</h1>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <div className="helpCardOne">
                                        <h2 className="connectionName  text-center">Customer Care</h2>
                                        <h4 className="helpDes "><FontAwesomeIcon className="imgLink " icon={faPhone} /> +8801770122200</h4>
                                        <h4 className="helpDes "><FontAwesomeIcon className="imgLink" icon={faClock} /> 24/7 Service Available</h4>
                                        <Button  variant="primary mt-3" ><a>More Details</a></Button>
                                    </div>



                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <div className="helpCardTwo">
                                        <h2 className="connectionName text-center">Bkash Payment</h2>
                                        <h4 className="helpDes "><FontAwesomeIcon className="imgLink" icon={faPhone} />Account Number +8801732014013</h4>
                                        <h4 className="helpDes"><FontAwesomeIcon className="imgLink" icon={faClock} />Payment Time 11:00am - 07:00 pm</h4>
                                        <Button variant="primary  mt-3" ><a>More Details</a></Button>


                                    </div>



                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default Contact;