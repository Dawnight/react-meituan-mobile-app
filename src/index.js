import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './static/reset.css';

import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));

(function () {
  window.onload = function () {
    function setRemUnit() {
      const docEl = document.documentElement;
      const rem = docEl.clientWidth / 10;
      docEl.style.fontSize = rem + 'px';
    }

    setRemUnit();
    window.addEventListener('resize', setRemUnit);
  };
})();
