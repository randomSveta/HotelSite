import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import { HOTELS_INFO } from "../../../hotels-data/hotels-info";
import { Link } from "react-router-dom";
import "../../../styles-css/home.css";
import CityPhotoDisplay from './CityPhotosDisplay';


export default function Home(props) {

    const citiesRooms = HOTELS_INFO.map((hotel, i) => {
        return (
            <li key={i}>{hotel.city}: {i + 5}</li>
        );

    });

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
                        <Col xs="12" className="m-0 p-0 h-100">
                            <Row className="m-0 p-0 h-50 align-items-center">
                                <Col xs="12" className="m-0 p-0">
                                    <Link id="go-to-search" className="" to="search?city=all">Check all hotels</Link>
                                </Col>
                            </Row>
                            <Row className="m-0 p-0 bg-white h-50 align-items-center justify-content-center" >
                                <Col xs="12" md="6"><p className="m-0 p-0">available rooms</p></Col>
                                <Col xs="12" md="6">
                                    <ul className="list-unstyled m-0 p-0 text-left">
                                        {citiesRooms}
                                    </ul>
                                </Col>
                            </Row>

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