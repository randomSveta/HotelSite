import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import AboutCityArticles from './AboutCityArticles';
import CheckAllHotels from '../../CheckAllHotels';
import '../../../styles/css/about.css'

function About(props) {

    const logoURL = require("../../../images/hotels-logo.png");

    return (
        <Container className="basic-main-container">
            <Row className="basic-main-row justify-content-left align-items-start">
                <Col xs="12" lg="2" className="text-center basic-col-m-p">
                    <Row className="m-0 p-0 justify-content-center align-items-center">
                        <Col xs="12" className="basic-row-m-p basic-row-height basic-dark-bg d-flex flex-column justify-content-center align-items-center text-white">
                            <p>Only today!</p>
                            <p>All rooms for FREE!</p>
                        </Col>
                        <Col xs="6" lg="12" className="basic-row-m-p xs basic-row-height basic-mint-bg d-flex flex-column justify-content-center align-items-center">
                            <Link to={"/"} exact="true">
                                <img className="basic-image-size img-fluid overflow-hidden m-0 p-0" src={logoURL} alt="logo" />
                            </Link>
                        </Col>
                        <Col xs="6" lg="12" className="basic-row-m-p xs basic-row-height basic-gold-bg d-flex flex-column justify-content-center align-items-center">
                            <CheckAllHotels />
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" lg="9" className="text-center basic-col-m-p">
                    <Row className="m-0 p-0 justify-content-center align-items-center">
                        <Col xs="12" className="basic-row-m-p basic-row-height xs-h basic-gold-bg d-flex flex-column justify-content-center align-items-center">
                            <h1 className="m-0 p-0">About "Good Hotels" Group</h1>
                            <article>
                                <p className="text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse nec rhoncus ipsum. Praesent molestie nulla at lorem semper,
                                    quis eleifend arcu tempor. Aenean hendrerit diam in metus volutpat molestie.
                                </p>
                            </article>
                        </Col>
                        <Col xs="12" className="basic-row-m-p basic-gold-bg d-flex flex-column justify-content-center align-items-center">
                            <Row className="m-0 p-0">
                                <AboutCityArticles />
                            </Row>
                        </Col>
                        <Col xs="12" className="basic-row-m-p basic-gold-bg d-flex flex-column justify-content-center align-items-center">
                            <article className="bg-white">
                                <h2 className="m-0 p-0 w-100 basic-gold-bg">More about us...</h2>
                                <p className="text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse nec rhoncus ipsum. Praesent molestie nulla at lorem semper,
                                    quis eleifend arcu tempor. Aenean hendrerit diam in metus volutpat molestie.
                            </p>
                                <p className="text-left">
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
