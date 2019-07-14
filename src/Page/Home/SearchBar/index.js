import React, { Component } from 'react';

import './index.scss';

class Search extends Component {
  render() {
    return (
      <div>
        <div className="search-bar">
          <div className="bar-location">
            <div className="location-icon"/>
            <div className="location-text">上海市</div>
          </div>
          <div className="search-btn">
            <div className="place-holder">鸡翅</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
