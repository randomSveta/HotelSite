import React from 'react';
import NavLinkButtonsGroup from './NavLinkButtonsGroup';


import "../../styles/css/navigation.css";


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
        <nav className="side-navigation overflow-hidden">
          <NavLinkButtonsGroup place="side" />
          <button className="side-nav-link login-button basic-mint-bg basic-font-caveat text-left">Login</button>
        </nav>
      </React.Fragment >
    );
  }
}