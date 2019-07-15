import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScrollView from '../../components/ScrollView';
import ListItem from './ListItem';
import './index.scss';

import { getOrderList } from '../../store/order/actions';

class Order extends Component {

  constructor(props) {
    super(props);
    this.page = 1;
    this.state = {
      isEnd: false
    };
  }

  componentDidMount() {
    this.fetchData(this.page);
  }

  onLoadPage = () => {
    if (this.page > 2) {
      this.setState({
        isEnd: true,
        loadingText: '加载完成'
      });
    } else {
      this.page++;
      this.fetchData(this.page);
    }
  };

  fetchData = page => {
    this.props.getOrderData(page);
  };

  renderList = () => {
    let orderList = this.props.orderList;
    return orderList.map(item => <ListItem itemData={item} key={item.order_id}/>);
  };

  render() {
    return (
      <div className="order">
        <div className="header">订单</div>
        <ScrollView loadCallback={this.onLoadPage} isEnd={this.state.isEnd}>
          <div className="order-list">
            {this.renderList()}
          </div>
        </ScrollView>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orderList: state.order.orderList
});

const mapDispatchToProps = dispatch => ({
  getOrderData(params) {
    dispatch(getOrderList(params));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
