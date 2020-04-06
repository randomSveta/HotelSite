import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import AboutCityArticles from './AboutCityArticles';
import CheckAllHotels from '../../CheckAllHotels';
import '../../../styles-css/about.css'

function About(props) {

    const logoURL = require("../../../images/hotels-logo.png");

    return (
        <Container className="main-container">
            <Row className="main-row justify-content-left align-items-start">
                <Col xs="12" md="2" className="text-center col-m-p">
                    <Row className="row-m-p row-height dark-bg text-white justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            <p>Only today!</p>
                            <p>Buy two rooms for the price of one!</p>
                        </Col>
                    </Row>
                    <Row className="row-m-p row-height blue-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            <Link to={"/"} exact="true">
                                <img className="image-size img-fluid overflow-hidden m-0 p-0" src={logoURL} alt="logo" />
                            </Link>
                        </Col>
                    </Row>
                    <Row className="row-m-p row-height gold-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            <CheckAllHotels />
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="9" className="text-center col-m-p">
                    <Row className="row-m-p row-height justify-content-center align-items-center gold-bg">
                        <Col xs="12" className="m-0 p-0">
                            <h1 className="m-0 p-0">About "Good Hotels" Group</h1>
                            <article>
                                <p className="text-left p-m-p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse nec rhoncus ipsum. Praesent molestie nulla at lorem semper,
                                    quis eleifend arcu tempor. Aenean hendrerit diam in metus volutpat molestie.
                                </p>
                            </article>
                        </Col>
                    </Row>
                    <Row className="row-m-p about-row justify-content-center align-items-start">
                        <AboutCityArticles />
                    </Row>
                    <Row className="row-m-p about-row justify-content-center align-items-start">
                        <Col xs="12" className="m-0 p-0 bg-white">
                            <article>
                                <h2 className="m-0 p-0 w-100 gold-bg">More about us...</h2>
                                <p className="text-left p-m-p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse nec rhoncus ipsum. Praesent molestie nulla at lorem semper,
                                    quis eleifend arcu tempor. Aenean hendrerit diam in metus volutpat molestie.
                            </p>
                                <p className="text-left p-m-p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse nec rhoncus ipsum. Praesent molestie nulla at lorem semper,
                                    quis eleifend arcu tempor. Aenean hendrerit diam in metus volutpat molestie.
                            </p>
                            </article>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default About;
