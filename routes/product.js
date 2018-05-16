var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ProductCategory = require('../models/ProductCategory.js');
var Product = require('../models/Product.js');
var Image = require('../models/Image.js');

router.post('/', function(req, res, next) {
  ProductCategory.findById(req.body.categoryId, function (err, category) {
    let cat = category;
    if (err) return next(err);
    
    let imageRecord = new Image();
    imageRecord.caption = 'Image of product';
    imageRecord.image.data = req.body.image;
    imageRecord.image.data = Buffer(req.body.image.toString('Base64'), 'base64');
    imageRecord.image.contentType = 'image/jpg';
  
    imageRecord.save(function(err, img) {
      if (err) throw err;
      console.log('Image is saved. ' + img);
  
      let productRecord = new Product();
      productRecord._id = new mongoose.Types.ObjectId();
      productRecord.displayStr = req.body.displayStr;
      productRecord.order = req.body.order;
      productRecord.imageUrl = img;
      productRecord.categoryId = cat._id;
      productRecord.save(function(err, product) {
        if (err) throw err;
        console.log('The product is saved ' + product);
        res.json(product);
      });
    });
  });
});

router.get('/', function(req, res, next) {
  var categoryId = req.param('category');
  Product.find({categoryId: categoryId}).sort({order: 1}).exec(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


module.exports = router;