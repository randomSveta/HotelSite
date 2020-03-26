import React from 'react';
import NavLinkButtonsGroup from './NavLinkButtonsGroup';


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
          <NavLinkButtonsGroup place="sidenav" />
          <button id="login-button" className="gray-color-bg">Login</button>
        </nav>
      </React.Fragment >
    );
  }
}