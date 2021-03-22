import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/esm/Container";
import { Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
;

class Connection extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className=" connection text-center p-0">

                        <div className="connectionOverlay">
                            <Container className="text-center">


                            <Row>
                                <Col lg={6} md={6} sm={12} >
                                    <div className="connectionCard">
                                        <h2 className="connectionName  text-center">Connection Payment</h2>
                                        <h4 className="connectionSubTitle text-justify"><FontAwesomeIcon className="iconBullet " icon={faCheckCircle} />One Time Installation Charge TK 1000 Only.</h4>
                                        <h4 className="connectionSubTitle text-justify"><FontAwesomeIcon className="iconBullet " icon={faCheckCircle} />Migration Charge TK 1000 (For Higher Package to lower</h4>
                                        <h4 className="connectionSubTitle text-justify"> <FontAwesomeIcon className="iconBullet " icon={faCheckCircle} />Price are all inclusive of all Government's Tax and VAT.</h4>
                                        <h4 className="connectionSubTitle text-justify"><FontAwesomeIcon className="iconBullet " icon={faCheckCircle} />installation Charge is Non-Refundable</h4>

                                    </div>



                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <div className="connectionCard">
                                        <h2 className="connectionName text-center">Other System</h2>
                                        <h4 className="connectionSubTitle text-justify"><FontAwesomeIcon className="iconBullet " icon={faCheckCircle} />National Id Card Photo Copy</h4>
                                        <h4 className="connectionSubTitle text-justify"><FontAwesomeIcon className="iconBullet " icon={faCheckCircle} />Two Passport Size Photo </h4>
                                        <h4 className="connectionSubTitle text-justify"> <FontAwesomeIcon className="iconBullet " icon={faCheckCircle} />Must be Fill-up Office Form.</h4>

                                    </div>



                                </Col>
                            </Row>
                            </Container>
                            </div>



                </Container>


            </Fragment>
        );
    }
}

export default Connection;