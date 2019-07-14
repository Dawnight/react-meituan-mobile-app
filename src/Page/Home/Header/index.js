import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import bannerBg from 'src/static/img/banner-bg.jpg';

import './index.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <SearchBar/>
        <img src={bannerBg} alt="banner-bg" className="banner-img"/>
      </div>
    );
  }
}

export default Header;
