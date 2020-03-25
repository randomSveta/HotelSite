import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col, Table
} from 'reactstrap';
import DatePickerForm from './Datepicker';
import { ROOMS_INFO } from "../../../hotels-data/rooms-info";

function RenderRoom({ room }) {
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{room.id + 1}</th>
        <td>{room.hotelId}</td>
        <td>{room.maxGuestsNumber}</td>
        <td>{room.price1guest$}</td>
      </tr>
    </React.Fragment>

  )
}

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropDownNumber = this.toggleDropDownNumber.bind(this);
    this.toggleDropDownDate = this.toggleDropDownDate.bind(this);
    this.state = {
      dropdownNumberOpen: false,
      dropdownDateOpen: false
    };
  }

  toggleDropDownNumber() {
    this.setState({
      dropdownNumberOpen: !this.state.dropdownNumberOpen
    });
  }
  toggleDropDownDate() {
    this.setState({
      dropdownDateOpen: !this.state.dropdownDateOpen
    });
  }

  render() {
    const roomsList = ROOMS_INFO.map((room) => {
      return (
        <RenderRoom room={room} key={room.id} />
      );
    });

    return (
      <Container className="under-nav text-center">
        <Row>
          <Col xs={12}>
            <h1 className="text-center">Find availible appartments in all our hotels!</h1>
          </Col>
        </Row>

        <InputGroup className="row">
          <Col xs={12} sm={7}>
            <DatePickerForm />
          </Col>
          <Col xs={12} sm={3} className="search-columns">
            <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownNumberOpen} toggle={this.toggleDropDownNumber}>
              <DropdownToggle caret>
                Number of guests
            </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Adults</DropdownItem>
                <DropdownItem>1</DropdownItem>
                <DropdownItem>2</DropdownItem>
                <DropdownItem>3</DropdownItem>
                <DropdownItem>4</DropdownItem>
                <DropdownItem>more than 4</DropdownItem>
                <DropdownItem divider />
                <DropdownItem header>Children from 6 years</DropdownItem>
                <DropdownItem>1</DropdownItem>
                <DropdownItem>2</DropdownItem>
                <DropdownItem>3</DropdownItem>
                <DropdownItem>4</DropdownItem>
                <DropdownItem>more than 4</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
          </Col>
          <Col sm={2} className="search-columns">
            <InputGroupAddon addonType="append"><Button color="secondary">Find!</Button></InputGroupAddon>
          </Col>
        </InputGroup>
        <Row>
          <Col>
            <h2>All our rooms</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Hotel</th>
                  <th>Number of Guests</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {roomsList}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}



export default Search;
