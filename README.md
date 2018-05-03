# MEAN Stack (Angular 5) CRUD Web Application Example

This source code is part of [MEAN Stack (Angular 5) CRUD Web Application Example](https://www.djamware.com/post/5a0673c880aca7739224ee21/mean-stack-angular-5-crud-web-application-example)

To run locally:

* Clone this repo
* Run `npm install`
* Run `npm start`

If you think this source code is useful, it will be great if you just give it star or just buy me a cup of cofee [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Q5WK24UVWUGBN)


============================================================================================================================
MongoDB
use books
db.category.insert({categoryId: "video", displayStr: "Prime Video", order: 1});
db.category.insert({categoryId: "tv", displayStr: "Fire TV", order: 2});
db.category.insert({categoryId: "electronics", displayStr: "Electronics, Computers & Office", order: 3});
db.category.insert({categoryId: "toys", displayStr: "Toys, Kids & Baby", order: 4});
db.category.insert({categoryId: "music", displayStr: "Amazone Music", order: 5});

db.category.find().sort({order: 1});

=> http://localhost:3000/category
