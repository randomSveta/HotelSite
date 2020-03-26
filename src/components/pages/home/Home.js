import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CityPhoto from './CityPhoto'
import { HOTELS_INFO } from "../../../hotels-data/hotels-info";
import { Link } from "react-router-dom";
import "./home.css";


export default function Home(props) {

    const citiesPhotos = HOTELS_INFO.map((hotel, i) => {
        return (
            <Row className="row-m-p row-height justify-content-center align-items-center gray-color-bg opacity-08" key={i}>
                <Col xs="12" className="m-0 p-0">
                    <CityPhoto hotel={hotel} />
                </Col>
            </Row>
        );

    });

    const citiesRooms = HOTELS_INFO.map((hotel, i) => {
        return (
            <li key={i}>{hotel.city}: {i + 5}</li>
        );

    });

    const logoURL = require("../../../images/hotels-logo.png");

    return (
        <Container className="p-0 my-0 mx-auto  container-home">
            <Row className="m-0 p-0 row-home justify-content-left align-items-start">
                <Col xs="12" md="3" className="text-center col-m-p">
                    <Row className="row-m-p row-height gold-color-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            <h1>Welcome!</h1>
                            <h3>choose the city</h3>
                        </Col>
                    </Row>
                    <Row className="row-m-p row-height gray-color-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0 h-100">
                            <Row className="m-0 p-0 h-50 align-items-center">
                                <Col xs="12" className="m-0 p-0">
                                    <Link id="go-to-search" className="" to="search?city=all">Check all hotels</Link>
                                </Col>
                            </Row>
                            <Row className="m-0 p-0 bg-white h-50 align-items-center justify-content-center" >
                                <Col xs="6"><p className="m-0 p-0">available rooms</p></Col>
                                <Col xs="6">
                                    <ul className="list-unstyled m-0 p-0 text-left">
                                        {citiesRooms}
                                    </ul>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <Row className="row-m-p row-height blue-color-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            <Link to={"/"} exact="true">
                                <img className="image-size img-fluid overflow-hidden m-0 p-0" src={logoURL} alt="logo" />
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col md="8" className="text-center col-m-p">
                    {citiesPhotos}
                </Col>
            </Row>
        </Container>
    )
};
/* <Link color="secondary" size="sm" to="/search?city=all" >I don't want to choose!</Link>*/