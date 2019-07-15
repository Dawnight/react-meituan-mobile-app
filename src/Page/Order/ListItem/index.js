import React, { Component } from 'react';
import './index.scss';

class OrderListItem extends Component {

  renderTotalPrice = (index, data) => {
    return (
      <div key={index} className="product-item">
        <span>...</span>
        <div className="product-total-count">
          总计{data.product_count}个菜, 实付<span className="total-price">¥{data.total}</span>元
        </div>
      </div>
    );
  };

  renderProduct = (data) => {
    let list = data.product_list;
    list.push({ type: 'more' });
    return list.map((item, index) => {
      if (item.type === 'more') {
        return this.renderTotalPrice(index, data);
      }
      return (
        <div className="product-item" key={index}>
          {item.product_name}
          <div className="product-count">x{item.product_count}</div>
        </div>
      );
    });
  };

  renderComment = (data) => {
    let evaluation = data.is_comment || 0;
    if (evaluation) {
      return (
        <div className="evaluation clearfix">
          <div className="evaluation-btn">评价</div>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    const data = this.props.itemData || [];
    return (
      <div className="order-item">
        <div className="order-item-inner">
          <img src={data.poi_pic} alt={data.poi_name} className="item-img"/>
          <div className="item-right">
            <div className="item-top">
              <p className="order-name one-line">{data.poi_name}</p>
              <div className="arrow"/>
              <div className="order-state">{data.status_description}</div>
            </div>
            <div className="item-bottom">
              {this.renderProduct(data)}
            </div>
          </div>
        </div>
        {this.renderComment(data)}
      </div>
    );
  }
}

export default OrderListItem;
