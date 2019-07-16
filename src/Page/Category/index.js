import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavHeader from 'src/components/NavHeader';
import Header from './Header';

class Category extends Component {
  render() {
    return (
      <div>
        <NavHeader title="分类"/>
        <Header/>
      </div>
    );
  }
}

export default connect()(Category);
