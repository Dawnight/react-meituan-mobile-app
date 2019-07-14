import React, { Component } from 'react';
import './index.scss';

class Loading extends Component {
  render() {
    let str = '加载中';
    if (this.props.isEnd) {
      str = '加载完成';
    }
    return (
      <div className="loading">{str}</div>
    );
  }
}

export default Loading;
