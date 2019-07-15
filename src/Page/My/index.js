import React, { Component } from 'react';
import DEFAULT_AVATAR from 'src/static/img/default-avatar.png';

import './index.scss';

class My extends Component {
  render() {
    return (
      <div className="my">
        <div className="header">
          <img src={DEFAULT_AVATAR} alt="avatar" className="avatar"/>
          <p className="nickname">xiaoming &gt;</p>
        </div>
        <div className="content">
          <ul className="items">
            <li className="address">
              收货地址
            </li>
            <li className="money">
              商家代金券
            </li>
          </ul>
          <ul className="items">
            <li className="email">
              意见反馈
            </li>
            <li className="question">
              常见问题
            </li>
          </ul>
          <p className="tel">客服电话: <label>&nbsp;010-11112222</label></p>
          <p className="tel">服务时间: <label>9:00-23:00</label></p>
        </div>
      </div>
    );
  }
}

export default My;
