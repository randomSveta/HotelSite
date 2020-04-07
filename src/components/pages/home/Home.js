import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Link } from "react-router-dom";
import "../../../styles-css/home.css";
import CityPhotoDisplay from './CityPhotosDisplay';
import CheckAllHotels from '../../CheckAllHotels';


export default function Home(props) {

    const logoURL = require("../../../images/hotels-logo.png");

    return (
        <Container className="main-container">
            <Row className="main-row justify-content-left align-items-center">
                <Col xs="12" lg="3" className="text-center col-m-p">
                    <Row className="m-0 p-0 justify-content-center align-items-center">
                        <Col xs="12" className="row-m-p row-height gold-bg d-flex flex-column justify-content-center align-items-center">
                            <h1>Welcome!</h1>
                            <h3>choose the city</h3>
                        </Col>
                        <Col xs="6" lg="12" className="row-m-p xs row-height gray-bg d-flex flex-column justify-content-center align-items-center">
                            <CheckAllHotels />
                        </Col>
                        <Col xs="6" lg="12" className="row-m-p xs row-height blue-bg d-flex flex-column justify-content-center align-items-center">
                            <Link to={"/"} exact="true">
                                <img className="image-size img-fluid overflow-hidden m-0 p-0" src={logoURL} alt="logo" />
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" lg="8" className="text-center col-m-p">
                    <Row className="m-0 p-0 justify-content-center align-items-center">
                        <CityPhotoDisplay />
                    </Row>
                </Col>
            </Row>
        </Container >
    )
};