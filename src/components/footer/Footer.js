import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import NavLinkButtonsGroup from '../navigation/NavLinkButtonsGroup';

import "../../styles-css/footer.css";

export default function Footer(props) {

    return (
        <footer id="footer" className='dark-bg text-white'>
            <Container className="main-container">
                <Row className="main-row-f justify-content-left align-items-center">
                    <Col xs="12" md="6" className="col-m-p text-center text-md-left">
                        <ul className="list-unstyled list-inline m-0 p-0">
                            <NavLinkButtonsGroup place="footer" />
                        </ul>
                    </Col>
                    <Col xs="12" md="5" className="col-m-p text-center text-md-right ">
                        <p className="m-0 p-0">good_hotels_group@random.sveta</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    );
}



