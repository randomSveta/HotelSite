import React from 'react';
import Home from './HomeComponent';
import Search from './SearchComponent';
import About from './AboutusComponent';
import Contacts from './ContactusComponent';
import { HOTELS_INFO } from '../shared/hotelInformation';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavbarComponent';
import Footer from './FooterComponent';
import { ROOMS_INFO } from '../shared/roomsInformation';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hotelInfo: HOTELS_INFO,
      roomsInfo: ROOMS_INFO
    };
  }


  render() {

    return (
      <React.Fragment>
        <Router basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Switch>
            <Route exact path='/' component={() => <Home hotelInfo={this
              .state.hotelInfo} />} />
            <Route path='/search' component={() => <Search roomsInfo={this
              .state.roomsInfo} />} />
            <Route path='/about' component={() => <About />} />
            <Route path='/contacts' component={() => <Contacts />} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>

      </React.Fragment>
    );
  }

}
