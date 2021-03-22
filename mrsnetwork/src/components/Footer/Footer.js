import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
import fb from "../../asset/images/fb.svg"
import Youtube from "../../asset/images/Youtubef.png"

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className=" footerSection">
                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-3 pl-5 text-justify">
                            <h1 className="footerName ">Follow Me</h1>
                            <hr  className="hr "/>
                            <a className="footerDescription" href="#"><img className="socialLink" src={fb} />  Facebook Page</a><br/>

                            <a className="footerDescription"  href="#"><img className="socialLink" src={Youtube}/> YouTube</a>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-3 text-justify">
                            <h1 className="footerName">Address</h1>
                            <hr  className="hr "/>
                            <p className="footerDescription" > # Technical Road (Near Pubali Bank LTD.), South Surma, Sylhet</p>
                            <p className="footerDescription" > <FontAwesomeIcon  icon={faEnvelope} /> contact.mrsnetwork@gmail.com</p>
                            <p className="footerDescription" > <FontAwesomeIcon  icon={faPhone} /> +8801766340436</p>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-3 pl-5  text-justify ">
                            <h1 className="footerNameLast ">Legal</h1>
                            <hr  className="hrLast "/>
                            <a  className="footerLink" href="#">Refund Policy</a><br/>
                            <a className="footerLink" href="#">Terms And Condition</a><br/>
                            <a className="footerLink" href="#">Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <hr  className="hrCopy w-100"/>
                    <a className="copyrightLink" href="#">All Right Reserved by MRS Network &copy; 2019</a>
                </Container>

            </Fragment>
        );
    }
}

export default Footer;