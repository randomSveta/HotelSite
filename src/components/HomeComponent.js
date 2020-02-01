import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CityPhoto from './CityphotoCompoponent'
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <Container>
            <Row id="row-welcome" className="justify-content-center align-items-center">
                <Col className="text-center">
                    <h1>Welcome to the "Funny Group" Hotels!</h1>
                    <p>Choose the city!</p>
                </Col>
            </Row>
            <Row id="row-images" className="justify-content-center align-items-center">
                <CityPhoto hotelInfo={props.hotelInfo} />
            </Row>
            <Row id="row-button" className="justify-content-center align-items-center">
                <Col xs="12" sm="9" className="text-center">
                    <Link color="secondary" size="sm" to="/search" block>I don't want to choose!</Link>
                </Col>
            </Row>
        </Container>
    )
};
export default Home;
