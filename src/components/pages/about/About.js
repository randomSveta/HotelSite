import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import AboutCityDisplay from './AboutCityDisplay';
import '../../../styles-css/about.css'



function About(props) {

    const logoURL = require("../../../images/hotels-logo.png");

    return (
        <Container className="main-container">
            <Row className="main-row justify-content-left align-items-start">
                <Col md="2" className="text-center col-m-p">
                    <Row className="row-m-p row-height dark-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            A
                        </Col>
                    </Row>
                    <Row className="row-m-p row-height beige-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            <Link to={"/"} exact="true">
                                <img className="image-size img-fluid overflow-hidden m-0 p-0" src={logoURL} alt="logo" />
                            </Link>
                        </Col>
                    </Row>
                    <Row className="row-m-p row-height gold-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            C
                    </Col>
                    </Row>
                </Col>
                <Col md="9" className="text-center col-m-p">
                    <Row className="row-m-p row-height justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            <h1>About "Good Hotels" Group</h1>
                            <p className="text-left m-0 p-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse nec rhoncus ipsum. Praesent molestie nulla at lorem semper,
                                quis eleifend arcu tempor. Aenean hendrerit diam in metus volutpat molestie.
                            </p>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 justify-content-center align-items-start">
                        <AboutCityDisplay />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default About;
