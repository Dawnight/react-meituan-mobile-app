import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTab } from 'store/tab/actions';
import './index.scss';

class BottomBar extends Component {

  changeTab (item) {
    this.props.changeTab({
      activeKey: item.key
    });
  };

  renderItem = () => {
    let tabs = this.props.tabs;
    return tabs.map((item, index) => {
      let cls = item.key + ' btn-item';
      let name = item.name;
      if (item.key === this.props.activeKey) {
        cls += ' active';
      }
      return (
        <div key={index}
          className={cls}
          onClick={() => this.changeTab(item)}>
          <div className="tab-icon"/>
          <div className="btn-name">{name}</div>
        </div>
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

const mapDispatchToProps = dispatch => ({
  changeTab(params) {
    return dispatch(changeTab(params));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);
