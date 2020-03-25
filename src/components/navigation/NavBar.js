import React from 'react';
import { PAGES } from "../pages/pages";
import { NavLink } from 'react-router-dom';
import "./navigation.css";

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
    const navLinks = PAGES.map((page, i) => {
      return (
        <NavLink to={page.url} exact={page.title === "Home" ? true : false} key={i} id={page.title.toLowerCase()}>{page.title}</NavLink>
      );
    });

    return (
      <React.Fragment>
        <nav id="side-navigation" className="side-nav overflow-hidden">
          {navLinks}
        </nav>
      </React.Fragment >
    );
  }
}
export default NavBar;