var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Image = require('../models/Image.js');
var Order = require('../models/Order.js');
var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)



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
    imageRecord.image.data = Buffer(req.body.attachedFile.content.toString('Base64'), 'base64');
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


      var smtpTransport = nodemailer.createTransport(
        {
          host: "smtp.gmail.com"
        },{
        service: "Gmail",
        auth: {
            user: "testsoftware5678@gmail.com",
            pass: "test@1234"
        }
    });
    
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: "testsoftware5678@gmail.com", // sender address
        to: "testsoftware5678@gmail.com", // list of receivers
        subject: "Đặt hàng", // Subject line
        
        html: "Đơn đặt hàng từ: <br/><ul><li> Khách hàng: "
          + orderRecord.name 
          +"</li <li> Email: "
          + orderRecord.email 
          +"</li> <li> Số điện thoại: "
          +orderRecord.tel
          +"</li><li> Địa chỉ: "
          +orderRecord.address
           +"</li><li> Mô tả đặt hàng: "
          +orderRecord.description
          + "</li> <li> Hình ảnh ví dụ: (xem file đính kèm)"
          +" </li> </ul>", // html body
        attachments: [
          {   // utf-8 string as an attachment
              filename: req.body.attachedFile.fileName,
              content: new Buffer(req.body.attachedFile.content.toString('Base64'), 'base64')
          }]
    }
    
    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent!");
            
        }
    
        // if you don't want to use this transport object anymore, uncomment following line
        //smtpTransport.close(); // shut down the connection pool, no more messages
    });

    });
  });
    


  module.exports = router;