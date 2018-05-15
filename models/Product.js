var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId, // unique product id
    displayStr: String, // to display on UI
    order: Number, // to decide the order of product
    imageUrl: mongoose.Schema.Types.ObjectId, // a reference to the image
    categoryId: mongoose.Schema.Types.ObjectId
  }, 
  { 
    'collection': 'product'
  }
);

module.exports = mongoose.model('Product', ProductSchema);
