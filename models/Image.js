var mongoose = require('mongoose');


var ImageSchema = new mongoose.Schema(
  {
    image: { data: Buffer, contentType: String },
    caption: String
  }, 
  { 
    'collection': 'image'
  }
);

module.exports = mongoose.model('Image', ImageSchema);
