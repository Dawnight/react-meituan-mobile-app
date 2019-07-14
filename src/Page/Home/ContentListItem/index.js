import React, { Component } from 'react';

import './index.scss';

class ContentListItem extends Component {

  renderBrand = data => {
    if (data.brand_type) {
      return <div className="brand brand-pin">品牌</div>;
    } else {
      return <div className="brand brand-xin">新到</div>;
    }
  };

  renderScore = data => {
    let score = data.wm_poi_score || 0;
    let scoreArray = score.toString().slice('.');
    let fullStar = parseInt(scoreArray[0]);
    let halfStar = parseInt(scoreArray[1]) >= 5 ? 1 : 0;
    let nullStar = 5 - fullStar - halfStar;
    let starUI = [];
    for (let i = 0; i < fullStar; i++) {
      starUI.push(<div className="star fullStar" key={i + 'full'}/>);
    }
    if (halfStar) {
      for (let j = 0; j < fullStar; j++) {
        starUI.push(<div className="star halfStar" key={j + 'half'}/>);
      }
    }
    if (nullStar) {
      for (let k = 0; k < nullStar; k++) {
        starUI.push(<div className="star nullStar" key={k + 'null'}/>);
      }
    }
    return starUI;
  };

  renderMonthNumber = data => {
    let number = data.month_sale_num || 0;
    if (number > 999) {
      return '999+';
    } else {
      return number;
    }
  };

  renderMeituanFlag = data => {
    let type = data.delivery_type || '';
    if (type) {
      return <div className="item-meituan-flag">美团专送</div>;
    }
    return null;
  };

  renderOthers = data => {
    let discountArray = data.discounts2 || [];
    return discountArray.map(item => {
      return (
        <div key={item.id} className="other-info">
          <img src={item.icon_url} alt="other-tag" className="other-tag"/>
          <div className="other-content">{item.info}</div>
        </div>
      );
    });
  };

  render() {
    let { itemData } = this.props;
    return (
      <div className="item-content scale-1px">
        <img src={itemData.pic_url} alt="item-img" className="item-img"/>
        {this.renderBrand(itemData)}
        <div className="item-info-content">
          <p className="item-title">{itemData.name}</p>
          <div className="item-desc clearfix">
            <div className="item-score">{this.renderScore(itemData)}</div>
            <div className="item-count">月售{this.renderMonthNumber(itemData)}</div>
            <div className="item-distance">&nbsp;{itemData.distance}</div>
            <div className="item-time">{itemData.mt_delivery_time}&nbsp;|</div>
          </div>
          <div className="item-price">
            <div className="item-pre-price">{itemData.min_price_tip}</div>
            {this.renderMeituanFlag(itemData)}
          </div>
          <div className="item-others">
            {this.renderOthers(itemData)}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentListItem;
