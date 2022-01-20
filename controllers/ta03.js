const fetch = require('node-fetch');

const Item = require('../models/ta03');

exports.getItems = (req, res, next) => {
  Item.fetchAll(data => {
    res.render('pages/ta03', {
      title: 'Team Activity 03',
      path: '/ta03',
      data: data
    });
  });
};

exports.getSearchItems = (req, res, next) => {
  const searchItem = req.query.item.toLowerCase();
  Item.search(searchItem, filteredItems => {
    res.render('pages/ta03', {
      title: 'Team Activity 03',
      path: '/ta03',
      data: filteredItems
    });
  });
};