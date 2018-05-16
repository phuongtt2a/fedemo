var mongoose = require("mongoose");

var OrderSchema = new mongoose.Schema({
    _id: String,
    name: String,
    email: String,
    tel: String,
    address: String,
    description: String,
    imageUrl: mongoose.Schema.Types.ObjectId // a reference to the image
});
module.exports = mongoose.model('Order', OrderSchema);