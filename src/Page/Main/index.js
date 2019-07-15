import React, { Component } from 'react';

// import Home from '../Home';
// import Order from '../Order';
import My from '../My';
import BottomBar from '../BottomBar';

class Main extends Component {
  render() {
    return (
      <div>
        {/*<Home/>*/}
        {/*<Order/>*/}
        <My/>
        <BottomBar/>
      </div>
    );
  }
}

export default Main;
