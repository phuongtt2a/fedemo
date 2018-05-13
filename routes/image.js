var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Image = require('../models/Image.js');

router.get('/:id', function(req, res, next) {
    console.log('find by id ..................x');
    console.log(req.params.id);
  Image.findById(req.params.id, function (err, record) {
      console.log('FIND>>>>>>>>>>>>>>>>>>>>>');
    if (err) return next(err);
    res.contentType('image/jpeg');
    //res.send(record.image.data);
    //res.json({data: record.image.data});
    res.end(record.image.data, "binary");
    console.log(record.image.data.buffer);
    console.log(record.image.data);
    //res.send(record.image.data.buffer);
  });
});


module.exports = router;