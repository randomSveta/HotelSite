import React from 'react';
import CitiesPage from './CitiespageComponent';
import HomeSearch from './HomesearchComponent';
import { HOTELS_INFO } from '../shared/hotelInformation';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './NavbarComponent';
import Footer from './FooterComponent';
import { withRouter } from 'react-router-dom';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hotelInfo: HOTELS_INFO
    };
  }

  render() {
    const HomeSearchPage = () => {
      return (
        <HomeSearch />
      );
    }

    const ShowNav = () => {
      if (this.props.location.pathname !== '/cities') {
        return <NavBar />
      }
    }

    const ShowFooter = () => {
      if (this.props.location.pathname !== '/cities') {
        return <Footer />
      }
    }

    return (
      <React.Fragment>
        {ShowNav()}
        <Switch>
          <Route path='/homesearch' component={HomeSearchPage} />
          <Route exact path='/cities' component={() => <CitiesPage hotelInfo={this
            .state.hotelInfo} />} />
          <Redirect to="/homesearch" />
        </Switch>
        {ShowFooter()}
      </React.Fragment>
    );
  }

}

export default withRouter(Main);
