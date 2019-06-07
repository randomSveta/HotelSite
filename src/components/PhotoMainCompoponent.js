import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardBody,
    CardTitle, CardText, Button
} from 'reactstrap';

function PhotoMain(props) {
    let hotelsImages = props.hotelInfo.map((hotel) => {
        return (

            <Col xs="12" sm="3" className="text-center">
                <Card key={hotel.id}>
                    <CardBody>
                        <CardTitle >{hotel.city}</CardTitle>
                        <CardImg className="img-fluid img-thumbnail rounded" src={hotel.main_photo} alt={hotel.name} />
                        <CardText>Hotel "{hotel.name}"</CardText>
                    </CardBody>
                </Card>
            </Col>
        )

    });
    return (
        <React.Fragment>
            {hotelsImages}
        </React.Fragment>);
};
export default PhotoMain;
