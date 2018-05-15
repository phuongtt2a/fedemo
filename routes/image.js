var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Image = require('../models/Image.js');

router.get('/:id', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  Image.findById(req.params.id, function (err, record) {
    if (err) return next(err);
    res.contentType('image/jpeg');
    res.end(record.image.data, "binary");
  });
});

module.exports = router;