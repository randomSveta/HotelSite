import React from 'react';
import { Col } from 'reactstrap';
import {
    Card, CardImg, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import { Link } from "react-router-dom";
import { HOTELS_INFO } from "../../hotels-info";

function CityPhoto(props) {
    let hotelsImages = HOTELS_INFO.map((hotel) => {
        return (
            <Col xs="12" sm="3" className="text-center" key={hotel.id}>
                <Link color="secondary" size="sm" to={"/search?city=" + hotel.city.toLowerCase().replace(" ", "-")} >
                    <Card>
                        <CardBody>
                            <CardTitle >{hotel.city}</CardTitle>
                            <CardImg className="img-fluid img-thumbnail rounded" src={hotel.main_photo} alt={hotel.name} />
                            <CardText>Hotel "{hotel.name}"</CardText>
                        </CardBody>
                    </Card>
                </Link>
            </Col>
        )

    });
    return (
        <React.Fragment>
            {hotelsImages}
        </React.Fragment>);
};
export default CityPhoto;
