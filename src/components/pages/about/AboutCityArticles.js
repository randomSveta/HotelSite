import React from 'react';
import { Row, Col } from 'reactstrap';
import AboutCityPhoto from './AboutCityPhoto'
import { HOTELS_INFO } from "../../../hotels-data/hotels-info";
import { Link } from 'react-router-dom';

export default function AboutCityArticles(props) {

    const aboutCityArticles = HOTELS_INFO.map((hotel, i) => {
        return (
            <Col xs="12" md="4" key={i} id={"about-col-" + i} className="about-col">
                <article className="">
                    <Link to={"/search?city=" + hotel.city.toLowerCase().replace(" ", "-")} className="dark-link" >
                        <h2 className="">{hotel.city}</h2>
                    </Link>
                    <Row className="m-0 p-0 justify-content-center align-items-center">
                        <Col xs="12" className="col-m-p img-col">
                            <AboutCityPhoto hotel={hotel} />
                        </Col>
                    </Row>
                    <Row className="m-0 p-0">
                        <Col xs="12" className="m-0 p-0 about-col">
                            <p className="p-m-p text-left">{hotel.description}</p>
                        </Col>
                    </Row>
                </article>
            </Col>
        );

    });

    return aboutCityArticles;
}