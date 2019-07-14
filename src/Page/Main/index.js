import React, { Component } from 'react';

import Home from '../Home';
import BottomBar from '../BottomBar';

class Main extends Component {
  render() {
    return (
      <div>
        <Home/>
        <BottomBar/>
      </div>
    );
  }
}

export default Main;
