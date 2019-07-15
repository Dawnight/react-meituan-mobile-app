import React, { Component } from 'react';

// import Home from '../Home';
import Order from '../Order';
import BottomBar from '../BottomBar';

class Main extends Component {
  render() {
    return (
      <div>
        {/*<Home/>*/}
        <Order/>
        <BottomBar/>
      </div>
    );
  }
}

export default Main;
