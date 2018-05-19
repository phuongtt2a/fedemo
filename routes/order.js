var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Image = require('../models/Image.js');
var Order = require('../models/Order.js');


/* GET ALL ORDER */
router.get('/', function(req, res, next) {
    Order.find({}).exec(function (err, orders) {
    if (err) return next(err);
    res.json(orders);
  });
});

router.post('/', function(req, res, next) {


    let imageRecord = new Image();
    imageRecord.caption = 'sample of Image provived by customer.';
    imageRecord.image.data = req.body.image;
    imageRecord.image.data = Buffer(req.body.image.toString('Base64'), 'base64');
    imageRecord.image.contentType = 'image/jpg';
  
    imageRecord.save(function(err, img) {
      if (err) throw err;
      console.log('Image is saved. ' + img);
  
      let orderRecord = new Order();
      orderRecord._id = new mongoose.Types.ObjectId();
      orderRecord.name = req.body.name;
      
      orderRecord.email = req.body.email;

      orderRecord.tel = req.body.tel;
      orderRecord.address = req.body.address;
      orderRecord.description = req.body.description;
      orderRecord.imageUrl = img; 
      orderRecord.save(function(err, order) {
        if (err) throw err;
        console.log('The order is saved ' + order);
        res.json(order);
      });
    });
    });


  module.exports = router;