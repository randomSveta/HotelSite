import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function Footer(props) {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col>
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                        <li><Link to='/homesearch'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Footer;



