import React from 'react';
import { Col } from 'reactstrap';
import CityPhoto from './CityPhoto'
import { HOTELS_INFO } from "../../../hotels-data/hotels-info";

export default function CityPhotoDisplay(props) {

    const citiesPhotos = HOTELS_INFO.map((hotel, i) => {
        return (

            <Col xs="12" className="basic-row-m-p basic-row-height d-flex justify-content-center align-items-center home-city-image" key={i}>
                <CityPhoto hotel={hotel} />
            </Col>
        );

    });

    return citiesPhotos;
}