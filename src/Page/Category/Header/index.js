import React, { Component } from 'react';

import { connect } from 'react-redux';

import { changeTab } from 'src/store/header/actions';

import './index.scss';

class Header extends Component {

  changeTab = item => {
    this.props.changeTab({
      activeKey: item.key
    });
  };

  renderTabs = () => {
    let tabs = this.props.tabs;
    let array = [];
    for (let key in tabs) {
      let item = tabs[key];
      let cls = item.key + ' item';
      if (item.key === this.props.activeKey) {
        cls += ' current';
      }
      array.push(
        <div className={cls}
          key={item.key}
          onClick={()=>this.changeTab(item)}>
          {item.text}
        </div>
      );
    }
    return array;
  };

  render() {
    return (
      <div className="header">
        <div className="header-top">
          {this.renderTabs()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tabs: state.header.tabs,
  activeKey: state.header.activeKey
});

const mapDispatchToProps = dispatch => ({
  changeTab(params) {
    return dispatch(changeTab(params));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
