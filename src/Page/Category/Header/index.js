import React, { Component } from 'react';

import { connect } from 'react-redux';

import { changeTab, getFilterData, changeFilter } from 'src/store/header/actions';
import { CATEGORY_KEY } from '../../../config';

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
          onClick={() => this.changeTab(item)}>
          {item.text}
        </div>
      );
    }
    return array;
  };

  renderContent = () => {
    let tabs = this.props.tabs;
    let array = [];
    for (let key in tabs) {
      let item = tabs[key];
      let cls = item + '-panel';
      if (item.key === this.props.activeKey) {
        cls += ' current';
      }
      let filterData = this.props.filterData;
      if (item.key === CATEGORY_KEY.cate) {
        array.push(
          <ul key={Math.random()}>
            <li key={item.key} className={cls}>
              {this.renderCateContent(filterData)}
            </li>
          </ul>
        );
      } else if (item.key === CATEGORY_KEY.type) {
        array.push(
          <ul key={Math.random()}>
            <li key={item.key} className={cls}>
              {this.renderTypeContent(filterData)}
            </li>
          </ul>
        );
      } else {
        array.push(
          <ul key={Math.random()}>
            <li key={item.key} className={cls}>
              {this.renderFilterContent(filterData)}
            </li>
          </ul>
        );
      }
    }
    return array;
  };

  renderCateContent = (filterData) => {
    let cateList = filterData.category_filter_list || [];
    return cateList.map(item => {
      return (
        <div key={item.code} className="cate-item">
          <p className="item-title">
            {item.name}
            <span className="item-count">{item.count}</span>
          </p>
          <div className="item-content">
            {this.renderCateInnerContent(item)}
          </div>
        </div>
      );
    });
  };

  renderCateInnerContent = (items) => {
    return items.sub_category_list.map(item => {
      let cls = item.active ? 'cate-box-inner active' : 'cate-box-inner';
      return (
        <div key={item.code} className="cate-box">
          <div className={cls}>
            {item.name}({item.quantity})
          </div>
        </div>
      );
    });
  };

  renderTypeContent = (filterData) => {
    let typeList = filterData.sort_type_list || [];

    return typeList.map((item, index) => {

      let cls = item.active ? "type-item active" : "type-item";

      return (
        <div key={index}
          className={cls}>
          {item.name}
        </div>
      );
    });
  };

  renderFilterContent = (filterData) => {

    let filterList = filterData.activity_filter_list || [];

    return filterList.map((item, index) => {
      return (
        <div key={index} className="filter-item">
          <p className="filter-title">{item.group_title}</p>
          <div className="item-content clearfix">
            {this.renderFilterInnerContent(item.items, filterList)}
          </div>
        </div>
      );
    });
  };

  renderFilterInnerContent = (items, filterList) => {
    return items.map((item, index) => {
      let cls = item.icon ? 'cate-box-inner has-icon' : 'cate-box-inner';
      if (item.active) {
        cls += ' active';
      }
      return (
        <div key={index} className="cate-box">
          <div className={cls}>
            {item.icon ? <img src={item.icon}/> : null}{item.name}
          </div>
        </div>
      );
    });
  };

  revertActive = (key, dataList) => {
    if (key === CATEGORY_KEY.cate) {
      for (let i = 0 ; i < dataList.length ; i++) {
        for (let j = 0 ; j < dataList[i].sub_category_list.length ;j++) {
          dataList[i].sub_category_list[j].active = false;
        }
      }
    } else if (key === CATEGORY_KEY.type) {
      for (let x = 0 ; x < dataList.length ; x++) {
        dataList[x].active = false;
      }
    } else {
      for (let k = 0 ; k < dataList.length ; k++) {
        for (let o = 0 ; o < dataList[k].items.length ;o++) {
          dataList[k].items[o].active = false;
        }
      }
    }
  }

  changeDoFilter = (item, key, dataList) => {
    this.revertActive(key, dataList);
    item.active = true;
    this.props.dispatch(changeFilter({
      item,
      key
    }));

    this.props.dispatch(getListData({
      filterData: item,
      toFirstPage: true
    }));

  }

  render() {
    return (
      <div className="header">
        <div className="header-top">
          {this.renderTabs()}
        </div>
        <div className="panel">
          <div className="panel-inner">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    if (this.props.filterData.length === 0) {
      this.props.getFilterData();
    }
  }

}

const mapStateToProps = state => ({
  tabs: state.header.tabs,
  activeKey: state.header.activeKey,
  filterData: state.header.filterData
});

const mapDispatchToProps = dispatch => ({
  changeTab(params) {
    return dispatch(changeTab(params));
  },
  getFilterData(params) {
    return dispatch(getFilterData(params));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
