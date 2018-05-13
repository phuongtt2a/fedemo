To run locally:

* Clone this repo
* Run `npm install`
* Run `npm start`
=> http://localhost:3000/

MongoDB

Database name can be change in app.js (line 14). Currently, we are using "mean-angular5".
We have 2 collections (tables):
* category - to store all product categories
** _id
** displayStr
** order
** imageUrl
* image - to store all images of product categories
** image
*** data
*** contentType
** caption