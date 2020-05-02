import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import NavLinkButtonsGroup from '../navigation/NavLinkButtonsGroup';

import "../../styles/css/footer.css";
import FooterSocialIconsDisplay from './FooterSocialIconsDisplay';

export default function Footer(props) {

    return (
        <footer className='basic-dark-bg text-white'>
            <Container className="basic-main-container">
                <Row className="footer-main-row justify-content-center justify-content-lg-start align-items-center">
                    <Col xs="12" lg="6" className="basic-col-m-p text-center text-lg-left">
                        <ul className="list-unstyled list-inline m-0 p-0">
                            <NavLinkButtonsGroup place="footer" />
                        </ul>
                    </Col>
                    <Col xs="12" lg="5" className="basic-col-m-p text-center text-lg-right">
                        <FooterSocialIconsDisplay place="footer" />
                    </Col>
                </Row>
            </Container>
        </footer>

    );
}



