import React from 'react';
import { Row, Col } from 'reactstrap';
import CityPhoto from './CityPhoto'
import { HOTELS_INFO } from "../../../hotels-data/hotels-info";
import "../../../styles-css/home.css";


export default function CityPhotoDisplay(props) {

    const citiesPhotos = HOTELS_INFO.map((hotel, i) => {
        return (
            <Row className="row-m-p row-height justify-content-center align-items-center gray-bg" key={i}>
                <Col xs="12" className="m-0 p-0">
                    <CityPhoto hotel={hotel} />
                </Col>
            </Row>
        );

    });

    return citiesPhotos;
}