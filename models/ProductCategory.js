var mongoose = require('mongoose');

var ProductCategorySchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId, // unique product category id
    displayStr: String, // to display on UI
    order: Number, // to decide the order of product category
    imageUrl: mongoose.Schema.Types.ObjectId // a reference to the image
  }, 
  { 
    'collection': 'category'
  }
);

module.exports = mongoose.model('ProductCategory', ProductCategorySchema);
