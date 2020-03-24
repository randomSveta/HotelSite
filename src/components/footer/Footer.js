import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function Footer(props) {
    return (
        <div className='footer bg-dark text-white'>
            <Container>
                <Row>
                    <Col>
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <Row>
                                <Col>
                                    <li><Link to='/home'>Choose City</Link></li>
                                    <li><Link to='/search'>Find a room!</Link></li>
                                    <li><Link to='/about'>About Us</Link></li>
                                </Col>
                                <Col>

                                    <li><Link to='/photo_gallery'>Photo Gallery</Link></li>
                                    <li><Link to='/contacts'>Contact Us</Link></li>
                                </Col>
                            </Row>

                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Footer;



