import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

import Bkash from "../../asset/images/bkash.png";

class Bill extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="billMainTitle">Billing System</h1>
                    <h1 className="billSubTitle">via</h1>
                    <img className="billImg" src={Bkash}/>
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <div className="billCard text-center">
                                <h2 className="billName ">Step-1</h2>
                                <h4 className="billDes pt-5">1.Send Money</h4>
                                <h4 className="billDes">2.Buy Airtime</h4>
                                <h4 className="billDesEx"> 3.Payment</h4>
                                <h4 className="billDes">4.Cash Out</h4>
                                <h4 className="billDes">5.My bKash</h4>
                                <h4 className="billDes">6.Helpline</h4>



                            </div>



                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="billCard text-center">
                                <h2 className="billName">Step-2</h2>

                                <h4 className="billDes pt-5" >Enter Merchant bKash Account No</h4>
                                <h4 className="billDesEx">+8801732014013</h4>


                            </div>

                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="billCard text-center">
                                <h2 className="billName">Step-3</h2>
                                <h4 className="billDes pt-5">Enter <br/> Amount</h4>
                                <h4 className="billDesEx" >1000</h4>

                            </div>

                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <div className="billCard text-center">
                               <h2 className="billName">Step-4</h2>
                                <h4 className="billDes pt-5">Enter <br/> Reference</h4>
                                <h4 className="billDesEx">mrsxxx</h4>
                            </div>

                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="billCard text-center">
                                <h2 className="billName">Step-5</h2>
                                <h4 className="billDes pt-5">Enter Counter no</h4>
                                <h4 className="billDesEx">1</h4>

                            </div>

                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <div className="billCard text-center">
                               <h2 className="billName">Step-6</h2>
                                <h4 className="billDes pt-5">Payment to +8801732014013</h4>
                                <h4 className="billDes">Amount tk 1000 Reference: mrsxxx</h4>
                                <h4 className="billDes">Counter: 1 Enter Menu PIN To confirm</h4>
                                <h4 className="billDesEx">xxxx</h4>

                            </div>

                        </Col>

                        <Col lg={3} md={6} sm={12}>
                        <div className="billCard text-center">
                            <h2 className="billName">Step-7</h2>
                            <h4 className="billDes pt-5">Payment tk 1000 to</h4>
                            <h4 className="billDes">+8801732014013 successful. Ref</h4>
                            <h4 className="billDes"> Fmrsxxx. Counter 1 Fee tk 0.00s</h4>
                            <h4 className="billDes">Balance Tk 3500.00 TrxID</h4>
                            <h4 className="billDes">123456789 at</h4>
                             <h4 className="billDesEx">01/12/2018 1835</h4>

                        </div>

                    </Col>

                        <Col lg={3} md={6} sm={12}>
                            <div className="billCard text-center">
                                <h2 className="billName">Step-8</h2>
                                <h4 className="billDes pt-5">Thanks For Everything</h4>

                            </div>

                        </Col>


                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default Bill;