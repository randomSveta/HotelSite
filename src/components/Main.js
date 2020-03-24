import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './navigation/NavBar';
import Footer from './footer/Footer';
import { PAGES } from "./pages/pages"

export default class Main extends React.Component {

  render() {

    const routes = PAGES.map((page, i) => {

      let route =
        <Route path={page.url} key={i} exact={page.title === "Home" ? true : false}>
          {page.component}
        </Route>

      return route;
    });

    return (
      <React.Fragment>
        <Router basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Switch>
            {routes}
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment >
    );
  }

}
