import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home';
import Order from '../Order';
import My from '../My';
import BottomBar from '../BottomBar';

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/home" component={Home} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/my" component={My} />
        <BottomBar/>
      </div>
    );
  }
}

export default Main;
