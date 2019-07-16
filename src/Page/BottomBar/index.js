import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import './index.scss';

class BottomBar extends Component {

  changeTab (item) {
    this.props.history.push(item.key);
  };

  renderItem = () => {
    let tabs = this.props.tabs;
    return tabs.map((item, index) => {
      let cls = item.key + ' btn-item';
      let name = item.name;
      return (
        <NavLink to={"/" + item.key}
          key={index}
          className={cls}
          activeClassName="active"
          onClick={() => this.changeTab(item)}>
          <div className="tab-icon"/>
          <div className="btn-name">{name}</div>
        </NavLink>
      );
    });
  };

  render() {
    return (
      <div className="bottom-bar">
        {this.renderItem()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tabs: state.tab.tabs,
  activeKey: state.tab.activeKey
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BottomBar));
