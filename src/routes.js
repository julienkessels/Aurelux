import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './screens/Home';
import Test from './screens/Test';
import Rows from './screens/Rows';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Home" component={Home} hideNavBar initial={true} />
          <Scene key="Test" component={Test} hideNavBar />
          <Scene key="Rows" component={Rows} hideNavBar />

        </Scene>
      </Router>
    )
  }
}
