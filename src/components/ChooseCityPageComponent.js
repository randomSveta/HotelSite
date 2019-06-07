import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PhotoMain from './PhotoMainCompoponent'
import { Button } from 'reactstrap';

function ChooseCityPage(props) {
    return (
        <Container>
            <Row id="row-welcome" className="justify-content-center align-items-center">
                <Col className="text-center">
                    <h1>Welcome!</h1>
                    <p>Choose city</p>
                </Col>
            </Row>
            <Row id="row-images" className="justify-content-center align-items-center">
                <PhotoMain hotelInfo={props.hotelInfo} />
            </Row>
            <Row id="row-button" className="justify-content-center align-items-center">
                <Col xs="12" sm="9" className="text-center">
                    <Button color="secondary" size="sm" block>I don't want to choose!</Button>
                </Col>
            </Row>
        </Container>
    )
};
export default ChooseCityPage;
