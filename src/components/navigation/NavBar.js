import React from 'react';
import { navLinks } from "../navigation/nav-links";
import "./navigation.css";

export default class NavBar extends React.Component {
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
        <nav id="side-navigation" className="side-nav overflow-hidden">
          {navLinks}
          <button id="login-button">Login</button>
        </nav>
      </React.Fragment >
    );
  }
}