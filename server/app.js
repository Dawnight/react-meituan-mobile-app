const express = require('express');
const uuid = require('uuid');

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
    resData.data.poilist = Header.data.poilist.slice(0, PER).map(item => {
      item.id = uuid();
      return item;
    });
  } else {

    resData.data.poilist = Header.data.poilist.slice((page - 1) * PER, page * PER).map(item => {
      item.id = uuid();
      return item;
    });
  }
  res.json(resData);
});

app.get('/api/orderList', (req, res) => {
  let page = req.query.page || 1;
  const PER = 6;
  let Order = require('./data/Order.json');
  let digestlist = Order.data.digestlist;
  page = Number(page);
  if (page === 1) {
    digestlist = digestlist.slice(0, PER).map(item => {
      item.order_id = item.order_id + '' + uuid();
      return item;
    });
  } else {
    digestlist = digestlist.slice((page - 1) * PER, page * PER).map(item => {
      item.order_id = item.order_id + '' + uuid();
      return item;
    });
  }
  res.json(digestlist);
});

app.get('/api/filterData', (req, res) => {
  const filterObj = require('./data/Filter.json');
  let data = filterObj.data;
  let keys = ['activity_filter_list', 'category_filter_list', 'sort_type_list'];
  keys.forEach(key => {
    data[key].map(item => {
      item.code = uuid();
      if (item.sub_category_list) {
        item.sub_category_list.map(i => {
          i.code = uuid() + Math.random().toString(32);
          return i;
        });
      }
      return item;
    });
  });
  res.json(data);
});

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`the api server is running at http://localhost:${PORT}`);
  }
});
