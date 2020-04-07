import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function CheckAllHotels(props) {

    /*  const cityRooms = HOTELS_INFO.map((hotel, i) => {
         return (
             <li key={i}>{hotel.city}: {i + 5}</li>
         );
 
     }); */

    return (
        <React.Fragment>
            <Row className="m-0 p-0 h-50 align-items-center">
                <Col xs="12" className="m-0 p-0">
                    <Link className="show-all-button" to="/search">Check all hotels</Link>
                </Col>
            </Row>
            {/* {<Row className="m-0 p-0 bg-white h-50 align-items-center justify-content-center" >
                <Col xs="12" md="6"><p className="m-0 p-0">available rooms</p></Col>
                <Col xs="12" md="6">
                    <ul className="list-unstyled m-0 p-0 text-left">
                        {cityRooms}
                    </ul>
                </Col>
                </Row>} */}
        </React.Fragment>
    );
}