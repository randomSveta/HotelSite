import React, { Component } from 'react';
import ChooseCityPage from './ChooseCityPageComponent';
import { HOTELS_INFO } from '../shared/hotelInformation';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hotelInfo: HOTELS_INFO
    };
  }

  render() {
    return (

      <React.Fragment>
        <ChooseCityPage hotelInfo={this.state.hotelInfo} />
      </React.Fragment>
    );
  }

}

export default Main;
