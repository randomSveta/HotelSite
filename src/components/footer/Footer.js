import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import NavLinkButtonsGroup from '../navigation/NavLinkButtonsGroup';

import "../../styles-css/footer.css";

export default function Footer(props) {

    return (
        <footer id="footer" className='footer-height w-100 dark-color-bg text-white'>
            <Container className="my-0 mx-auto p-0 footer-height">
                <Row className="m-0 p-0 footer-height justify-content-left align-items-center">
                    <Col xs="12" md="8" className="col-m-p">
                        <ul className="list-unstyled list-inline m-0 p-0">
                            <NavLinkButtonsGroup place="footer" />
                        </ul>
                    </Col>
                    <Col xs="12" md="3" className="col-m-p">
                        <p className="m-0 p-0 text-right">good_hotels_group@random.sveta</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    );
}



