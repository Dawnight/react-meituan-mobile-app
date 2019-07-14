import React, { Component } from 'react';
import './index.scss';

class ScrollView extends Component {

  onLoadPage = () => {
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.body.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let preLoadDis = 30;
    if ((scrollTop + clientHeight) >= (scrollHeight - preLoadDis)) {
      const { loadCallback, isEnd } = this.props;
      if (!isEnd) {
        loadCallback && loadCallback();
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onLoadPage);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onLoadPage);
  }

  render() {
    return (
      <div className="scroll-view">
        {this.props.children}
      </div>
    );
  }
}

export default ScrollView;
