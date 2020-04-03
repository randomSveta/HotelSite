import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import { HOTELS_INFO } from "../../../hotels-data/hotels-info";
import { Link } from "react-router-dom";
import "../../../styles-css/home.css";
import CityPhotoDisplay from './CityPhotosDisplay';
import CheckAllHotels from '../../CheckAllHotels';


export default function Home(props) {

    const logoURL = require("../../../images/hotels-logo.png");

    return (
        <Container className="main-container">
            <Row className="main-row justify-content-left align-items-start">
                <Col xs="12" md="3" className="text-center col-m-p">
                    <Row className="row-m-p row-height gold-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            <h1>Welcome!</h1>
                            <h3>choose the city</h3>
                        </Col>
                    </Row>
                    <Row className="row-m-p row-height gray-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0 ">
                            <CheckAllHotels />
                        </Col>
                    </Row>
                    <Row className="row-m-p row-height blue-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            <Link to={"/"} exact="true">
                                <img className="image-size img-fluid overflow-hidden m-0 p-0" src={logoURL} alt="logo" />
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col md="8" className="text-center col-m-p">
                    <CityPhotoDisplay />
                </Col>
            </Row>
        </Container>
    )
};