import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";
import ftp from '../../asset/images/ftp.png'
import bdix from '../../asset/images/bdix.png'
import youTube from '../../asset/images/Youtubef.png'



class Packages extends Component {
    render() {
        return (
           <Fragment>
               <Container className="text-center">
                 <h1 className="packagesMainTitle">Few Home User Packages</h1>
                   <Row>
                       <Col lg={4} md={6} sm={12}>
                           <div className="packagesCard text-center">
                              <h2 className="packageName">PACKAGE-1</h2>
                                 <h4 className="packagesDes"><FontAwesomeIcon className="iconLink" icon={faGlobe}/>Internet : 5Mbps</h4>
                                <h4 className="packagesDes"><img className="imgIcon" src={youTube}/>Youtube : 20Mbps</h4>
                                <h4 className="packagesDes"> <FontAwesomeIcon className="iconLink" icon={faFacebook} />Facebook : 10Mbps</h4>
                                <h4 className="packagesDes"><img className="imgIcon" src={ ftp}/>FTP : Upto 100Mbps</h4>
                                <h4 className="packagesDes"><img className="imgIcon" src={bdix}/>BDIX : Upto 100Mbps</h4>
                               <Button variant="primary" >BDT 1000/MONTH</Button>

                           </div>



                       </Col>
                       <Col lg={4} md={6} sm={12}>
                           <div className="packagesCard text-center">
                               <h2 className="packageName">PACKAGE-2</h2>
                               <h4 className="packagesDes"><FontAwesomeIcon className="iconLink" icon={faGlobe}/>Internet : 7Mbps</h4>
                               <h4 className="packagesDes"><img className="imgIcon" src={youTube}/>Youtube :30Mbps</h4>
                               <h4 className="packagesDes"> <FontAwesomeIcon className="iconLink" icon={faFacebook} />Facebook : 15Mbps</h4>
                               <h4 className="packagesDes"><img className="imgIcon" src={ ftp}/>FTP : Upto 100Mbps</h4>
                               <h4 className="packagesDes"><img className="imgIcon" src={bdix}/>BDIX : Upto 100Mbps</h4>
                               <Button variant="primary" >BDT 1500/MONTH</Button>

                           </div>



                       </Col>
                       <Col lg={4} md={6} sm={12}>
                           <div className="packagesCard text-center">
                               <h2 className="packageName">PACKAGE-3</h2>
                               <h4 className="packagesDes"><FontAwesomeIcon className="iconLink"  icon={faGlobe}/>Internet : 10Mbps</h4>
                               <h4 className="packagesDes"><img className="imgIcon" src={youTube}/>Youtube : 30Mbps</h4>
                               <h4 className="packagesDes"> <FontAwesomeIcon className="iconLink"  icon={faFacebook} />Facebook : 20Mbps</h4>
                               <h4 className="packagesDes"><img className="imgIcon" src={ ftp}/>FTP : Upto 100Mbps</h4>
                               <h4 className="packagesDes"><img className="imgIcon" src={bdix}/>BDIX : Upto 100Mbps</h4>

                               <Button variant="primary">BDT 2000/MONTH</Button>
                           </div>



                       </Col>


                   </Row>
               </Container>


           </Fragment>
        );
    }
}

export default Packages;