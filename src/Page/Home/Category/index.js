import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategoryList } from '../../../store/category/actions';
import './index.scss';

class Category extends Component {

  fetchData = () => {
    this.props.getCategoryList();
  };

  renderItems = () => {
    let primaryFilterList = this.props.categoryList.primary_filter || [];
    console.log(primaryFilterList);
    primaryFilterList = primaryFilterList.splice(0, 8);
    return primaryFilterList.map(item => (
      <div key={item.code} className="category-item">
        <img src={item.url} className="item-icon" alt="icon"/>
        <p className="item-name">{item.name}</p>
      </div>
    ));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="category-content clearfix">
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categoryList: state.category.categoryList
});

const mapDispatchToProps = dispatch => ({
  getCategoryList() {
    dispatch(getCategoryList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
