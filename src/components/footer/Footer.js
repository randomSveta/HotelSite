import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import NavLinkButtonsGroup from '../navigation/NavLinkButtonsGroup';

import "../../styles-css/footer.css";
import FooterSocialIconsDisplay from './FooterSocialIconsDisplay';

export default function Footer(props) {

    return (
        <footer className='dark-bg text-white'>
            <Container className="main-container">
                <Row className="footer-main-row justify-content-center justify-content-lg-start align-items-center">
                    <Col xs="12" md="6" className="col-m-p text-center text-md-left">
                        <ul className="list-unstyled list-inline m-0 p-0">
                            <NavLinkButtonsGroup place="footer" />
                        </ul>
                    </Col>
                    <Col xs="12" md="6" lg="5" className="col-m-p text-center text-md-right">
                        <FooterSocialIconsDisplay place="footer" />
                    </Col>
                </Row>
            </Container>
        </footer>

    );
}



