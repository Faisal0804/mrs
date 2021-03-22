import React, {Component, Fragment} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import aboutImg from '../../asset/images/aboutMain.png'

class HomeAbout extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={6} md={12}>
                            <h1 className="AboutName text-justify">Why MRS?</h1>
                            <h1 className="AboutSubName text-justify">24/7 Service Available.</h1>
                            <p className="AboutDescription text-justify">

                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                            <Button  variant="primary mt-3" ><a className="">More Details</a></Button>



                        </Col>


                        <Col sm={12} lg={6} md={12}>

                            <img src={aboutImg}/>


                        </Col>
                    </Row>
                </Container>

            </Fragment>

        );
    }
}

export default HomeAbout;