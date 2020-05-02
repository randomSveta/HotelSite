import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Link } from "react-router-dom";
import CityPhotoDisplay from './CityPhotosDisplay';
import CheckAllHotels from '../../CheckAllHotels';

import "../../../styles/css/home.css";


export default function Home(props) {

    const logoURL = require("../../../images/hotels-logo.png");

    return (
        <Container className="basic-main-container">
            <Row className="basic-main-row justify-content-left align-items-start">
                <Col xs="12" lg="3" className="text-center basic-col-m-p">
                    <Row className="m-0 p-0 justify-content-center align-items-center">
                        <Col xs="12" className="basic-row-m-p basic-row-height basic-gold-bg d-flex flex-column justify-content-center align-items-center">
                            <h1 className="basic-font-caveat">Welcome!</h1>
                            <h3>choose the city</h3>
                        </Col>
                        <Col xs="6" lg="12" className="basic-row-m-p xs basic-row-height basic-pink-bg d-flex flex-column justify-content-center align-items-center">
                            <CheckAllHotels />
                        </Col>
                        <Col xs="6" lg="12" className="basic-row-m-p xs basic-row-height basic-mint-bg d-flex flex-column justify-content-center align-items-center">
                            <Link to={"/"} exact="true">
                                <img className="basic-image-size img-fluid overflow-hidden m-0 p-0" src={logoURL} alt="logo" />
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" lg="8" className="text-center basic-col-m-p">
                    <Row className="m-0 p-0 justify-content-center align-items-center">
                        <CityPhotoDisplay />
                    </Row>
                </Col>
            </Row>
        </Container >
    )
};