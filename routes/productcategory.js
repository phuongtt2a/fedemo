var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ProductCategory = require('../models/ProductCategory.js');
var Product = require('../models/Product.js');
var Image = require('../models/Image.js');

// Code below to save the image from file system
/*  
  var fs = require('fs');

  var imgPath = '/Users/phamdinhduyphuong/Downloads/Avatar/dd39be899aa095b1fcfbb4d214edbb0a.jpg';
  
  let imageRecord = new Image();
  imageRecord.caption = 'Image of category';
  imageRecord.image.data = fs.readFileSync(imgPath);
  imageRecord.image.contentType = 'image/jpg';

  imageRecord.save(function(err, img) {
    if (err) throw err;
    console.log('Image is saved. ' + img);

    let productRecord = new ProductCategory();
    productRecord._id = new mongoose.Types.ObjectId();
    productRecord.displayStr = 'Product 1';
    productRecord.order = 1;
    productRecord.imageUrl = img;
    productRecord.save(function(err, product) {
      if (err) throw err;
      console.log('The product is saved ' + product);
    });
  });
*/

/* GET ALL CATEGORY */
router.get('/', function(req, res, next) {
  ProductCategory.find({}).sort({order: 1}).exec(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.post('/', function(req, res, next) {

  let imageRecord = new Image();
  imageRecord.caption = 'Image of category';
  imageRecord.image.data = req.body.image;
  imageRecord.image.data = Buffer(req.body.image.toString('Base64'), 'base64');
  imageRecord.image.contentType = 'image/jpg';

  imageRecord.save(function(err, img) {
    if (err) throw err;
    console.log('Image is saved. ' + img);

    let productRecord = new ProductCategory();
    productRecord._id = new mongoose.Types.ObjectId();
    productRecord.displayStr = req.body.displayStr;
    productRecord.order = req.body.order;
    productRecord.imageUrl = img;
    productRecord.save(function(err, product) {
      if (err) throw err;
      console.log('The product is saved ' + product);
      res.json(product);
    });
 
  });
});

router.delete('/:id', function(req, res, next) {
  ProductCategory.findById(req.params.id).exec(function (err, product) {
    if (err) return next(err);
    //----------------------------------------------------
    //TODO delete all products belong to the category also
    //----------------------------------------------------
    Image.findByIdAndRemove(product.imageUrl, function(err, imageId) {
      if (err) return next(err);
      console.log('Image is removed');
    });
    ProductCategory.findByIdAndRemove(product, function(err, prod){
      if (err) return next(err);
      res.json(prod);
    });
  });
});

router.get('/:id', function(req, res, next) {
  ProductCategory.findById(req.params.id, function (err, category) {
    if (err) return next(err);
    res.json(category);
  });
});

router.get('/products/:id', function(req, res, next) {
  Product.count({categoryId: req.params.id}, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

module.exports = router;