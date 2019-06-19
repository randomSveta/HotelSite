import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar color="dark" dark className="fixed-top" expand="sm">
          <Container>
            <NavbarBrand href="/home">"Funny Group" Hotels</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink to="/search" activeClassName="active" tag={RRNavLink}>Find a room! </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about" activeClassName="active" tag={RRNavLink}>About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/photo_gallery" activeClassName="active" tag={RRNavLink}>Photo Gallery</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contacts" activeClassName="active" tag={RRNavLink}>Contact Us</NavLink>
                </NavItem>
              </Nav>
              <Nav>
                <NavItem className="ml-auto" navbar>
                  <Button outline onClick={this.toggleModal}>
                    Login
                                    </Button>
                </NavItem>
              </Nav>

            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default NavBar;