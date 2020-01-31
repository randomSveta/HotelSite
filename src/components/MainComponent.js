import React from 'react';
import Home from './HomeComponent';
import Search from './SearchComponent';
import About from './AboutusComponent';
import Contacts from './ContactusComponent';
import { HOTELS_INFO } from '../shared/hotelInformation';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './NavbarComponent';
import Footer from './FooterComponent';
import { withRouter } from 'react-router-dom';
import { ROOMS_INFO } from '../shared/roomsInformation';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hotelInfo: HOTELS_INFO,
      roomsInfo: ROOMS_INFO
    };
  }


  render() {

    const AboutUsPage = () => {
      return (
        <About />
      );
    }
    const ContactUsPage = () => {
      return (
        <Contacts />
      );
    }

    const ShowNav = () => {
      if (this.props.location.pathname !== '/') {
        return <NavBar />
      }
    }

    const ShowFooter = () => {
      if (this.props.location.pathname !== '/') {
        return <Footer />
      }
    }

    return (
      <React.Fragment>
        {ShowNav()}

        <Switch>
          <Route path='/search' component={() => <Search roomsInfo={this
            .state.roomsInfo} />} />
          <Route exact path='/' component={() => <Home hotelInfo={this
            .state.hotelInfo} />} />
          <Route path='/about' component={AboutUsPage} />
          <Route path='/contacts' component={ContactUsPage} />
          <Redirect to="/" />
        </Switch>
        {ShowFooter()}
      </React.Fragment>
    );
  }

}

export default withRouter(Main);
