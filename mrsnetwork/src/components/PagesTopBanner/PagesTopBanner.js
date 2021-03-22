import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import ftp from "../../asset/images/ftp.png";
import bdix from "../../asset/images/bdix.png";
import Youtube from "../../asset/images/youtube.png";
import fb from "../../asset/images/fb.svg";


class PagesTopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0" >
                    <div className="topPageOverlay">
                        <Container>
                            <Row>
                                <Col lg={4} md={4} sm={12} className="imgMargin text-center">
                                    <h4 className="bannerDes "> <img className="bannerImgIcon " src={Youtube} />Bufferless HD Youtube</h4>
                                    <h4 className="bannerDes"><img className="bannerImgIcon" src={fb} />Seamless Facebook</h4>
                                </Col>
                                <Col lg={4} md={4} sm={12} className="text-center">
                                    <h4 className="pageTitle topPageContent" >{this.props.pagesTitle}</h4>
                                </Col>
                                <Col lg={4} md={4} sm={12} className=" imgMargin text-center">
                                    <h4 className="bannerDes"><img className="bannerImgIcon " src={ ftp}/>High Speed FTP Server</h4>
                                    <h4 className="bannerDes"><img className="bannerImgIcon" src={bdix}/>Faster BDIX Connection</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

            </Fragment>
        );
    }
}

export default PagesTopBanner;