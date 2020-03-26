import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Contacts(props) {
    return (
        <Container className="p-0 my-0 mx-auto  container-home">
            <Row className="m-0 p-0 row-home justify-content-left align-items-start">
                <Col md="3" className="text-center col-m-p">
                    <Row className="row-m-p row-height gold-color-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            A
                        </Col>
                    </Row>
                    <Row className="row-m-p row-height gray-color-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            B
                        </Col>
                    </Row>
                    <Row className="row-m-p row-height blue-color-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            C
                    </Col>
                    </Row>
                </Col>
                <Col md="8" className="text-center col-m-p">
                    <Row className="row-m-p row-height justify-content-center align-items-center gray-color-bg opacity-08">
                        <Col xs="12" className="m-0 p-0">
                            D
                </Col>
                    </Row>
                    <Row className="row-m-p row-height justify-content-center align-items-center gray-color-bg opacity-08">
                        <Col xs="12" className="m-0 p-0">
                            D
                </Col>
                    </Row>
                    <Row className="row-m-p row-height justify-content-center align-items-center gray-color-bg opacity-08">
                        <Col xs="12" className="m-0 p-0">
                            D
                </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacts;
