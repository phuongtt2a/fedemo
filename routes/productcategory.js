var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ProductCategory = require('../models/ProductCategory.js');

/* GET ALL CATEGORY */
router.get('/', function(req, res, next) {

  ProductCategory.find({}).sort({order: 1}).exec(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

module.exports = router;