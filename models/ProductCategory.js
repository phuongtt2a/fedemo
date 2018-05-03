var mongoose = require('mongoose');

var ProductCategorySchema = new mongoose.Schema({
  categoryId: String,
  displayStr: String,
  order: Number}, { 'collection': 'category'});

module.exports = mongoose.model('ProductCategory', ProductCategorySchema);
