import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SocialIconsDisplay from './SocialIconsDisplay';
import "../../../styles-css/contacts.css"
import ContactForm from './ContactForm';

function Contacts(props) {
    return (
        <Container className="main-container">
            <Row className="main-row justify-content-left align-items-start">
                <Col md="2" className="text-center col-m-p">
                    <Row className="row-m-p row-height gold-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            A
                        </Col>
                    </Row>
                    <Row className="row-m-p row-height gray-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            B
                        </Col>
                    </Row>
                    <Row className="row-m-p row-height blue-bg justify-content-center align-items-center">
                        <Col xs="12" className="m-0 p-0">
                            C
                    </Col>
                    </Row>
                </Col>
                <Col md="9" className="text-center col-m-p">
                    <Row className="row-m-p row-height justify-content-center align-items-center gray-bg">
                        <SocialIconsDisplay place="page" />
                    </Row>
                    <Row className="row-m-p row-height justify-content-center align-items-center gray-bg">
                        <Col xs="12" className="m-0 p-0">
                            <address>
                                AAAA
                            </address>
                        </Col>
                    </Row>
                    <Row className="row-m-p justify-content-center align-items-center blue-bg">
                        <Col xs="12" className="m-0 p-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10879126.298538392!2d15.591168723803777!3d48.26366838416164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1586194236386!5m2!1sen!2suk" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" title="Europe map"></iframe>
                        </Col>
                    </Row>
                    <Row className="row-m-p justify-content-center align-items-center blue-bg">
                        <Col xs="12" className="m-0 p-0">
                            <ContactForm />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacts;
