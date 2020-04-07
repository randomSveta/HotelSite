import React from 'react';
import { Col } from 'reactstrap';
import CityPhoto from './CityPhoto'
import { HOTELS_INFO } from "../../../hotels-data/hotels-info";
import "../../../styles-css/home.css";


export default function CityPhotoDisplay(props) {

    const citiesPhotos = HOTELS_INFO.map((hotel, i) => {
        return (

            <Col xs="12" className="row-m-p row-height gray-bg d-flex justify-content-center align-items-center" key={i}>
                <CityPhoto hotel={hotel} />
            </Col>
        );

    });

    return citiesPhotos;
}