const express = require('express');

const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "content-type");
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  next();
});

app.get('/api/categoryList', (req, res) => {
  const Header = require('./data/Category.json');
  res.json(Header);
});

app.get('/api/nearbyMerchants', (req, res) => {
  let page = req.query.page || 1;
  const PER = 6;
  const Header = require('./data/NearbyMerchants.json');
  let resData = {
    "tgt_stids": "",
    "code": 0,
    "msg": "成功",
    "data": {
      "poilist": []
    }
  };
  page = Number(page);
  if (page === 1) {
    resData.data.poilist = Header.data.poilist.slice(0, PER);
  } else {
    resData.data.poilist = Header.data.poilist.slice((page - 1) * PER, page * PER);
  }
  res.json(resData);
});

app.get('/api/orderList', (req, res) => {
  const Order = require('./data/Order.json');
  res.json(Order);
});

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`the api server is running at http://localhost:${PORT}`);
  }
});
