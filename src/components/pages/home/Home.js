import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CityPhoto from './CityPhoto'
import { HOTELS_INFO } from "../../../hotels-data/hotels-info";
import { Link } from "react-router-dom";
import "./home.css";


export default function Home(props) {

    const citiesPhotos = HOTELS_INFO.map((hotel, i) => {
        return (
            <Row className="row-m-p row-height justify-content-center align-items-center blue-color-bg opacity-08" key={i}>
                <Col xs="12" className="m-0 p-0">
                    <CityPhoto hotel={hotel} />
                </Col>
            </Row>
        );

    });

    const logoURL = require("../../pages/home/images/hotels-logo.png");

    return (
        <Container className="p-0 my-0 mx-auto  container-home">
            <Row className="m-0 p-0 row-home justify-content-left align-items-start">
                <Col md="3" className="text-center col-m-p">
                    <Row className="row-m-p row-height blue-color-bg">
                        <Col xs="12" className="m-0 p-0">
                            <h1>Welcome!</h1>
                            <h3>Choose the city!</h3>
                        </Col>
                    </Row>
                    <Row className="row-m-p row-height gray-color-bg">
                        <Col xs="12" className="m-0 p-0">
                            <Link to="search?city=all">Don't want to choose</Link>
                        </Col>
                    </Row>
                    <Row className="row-m-p row-height gold-color-bg">
                        <Col xs="12" className="m-0 p-0">
                            <img className="image-size img-fluid overflow-hidden m-0 p-0" src={logoURL} alt="logo" />
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