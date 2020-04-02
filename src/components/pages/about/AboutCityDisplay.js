import React from 'react';
import { Row, Col } from 'reactstrap';
import AboutCityPhoto from './AboutCityPhoto'
import { HOTELS_INFO } from "../../../hotels-data/hotels-info";

export default function AboutCityDisplay(props) {

    const aboutCitiesPhotos = HOTELS_INFO.map((hotel, i) => {
        return (
            <Col xs="12" md="4" key={i} id={"a-col-" + i} className="">
                <Row className="m-0 p-0 justify-content-center align-items-center beige-bg">
                    <Col xs="12" className="m-0 p-0">
                        <AboutCityPhoto hotel={hotel} />
                    </Col>
                </Row>
                <Row className="m-0 p-0">
                    <Col xs="12" className="m-0 p-0">
                        <p className="bg-white text-justify">{hotel.description}</p>
                    </Col>
                </Row>
            </Col>
        );

    });

    return aboutCitiesPhotos;
}