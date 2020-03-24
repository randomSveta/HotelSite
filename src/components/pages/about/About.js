import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function About(props) {
    return (
        <Container className="under-nav text-center">
            <Row>
                <Col xs={12}>
                    <h1 className="text-center">About Us</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default About;
