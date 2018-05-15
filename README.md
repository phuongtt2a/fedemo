## How to
To run locally:

* Clone this repo
* Run `npm install`
* Run `npm start`
=> http://localhost:3000/

## Database - MongoDB

Database name can be changed in app.js (line 14). Currently, we are using "mean-angular5".
We have 2 collections (tables):
1. category - to store all product categories
    - _id
    - displayStr
    - order
    - imageUrl
2. image - to store all images of product categories
    - image
        - data
        - contentType
    - caption

## APIs
### Server APIs
1. [GET] /api/category - List all cateogories
2. [GET] /api/category/{id} - Get category by id {id}    
3. [POST] /api/category - Add new category
4. [DELETE] /api/category/{id} - Delete category with id {id}

### Frontend
1. /category - List all categories
2. /category/new - Create new category

## Current features
1. Create a new product category. Notice that, currently we support JPEG images only.
2. List all product categories
3. Delete a selected product category

## TODOs
* Implement new feature - Add products into a product category
    * When deleting a category -> delete all products which belong to it also
    * Upload image to a file system or mongodb? consider the performance to load image in this case
* Clean code - Remove all codes related to "Book", including database scripts, configuration...
* Support all types of images instead of JPEG only
* Upgrade UI by using css & change the UX. Consider using grid components to display data on the main page
* Authentication & Authorization
    * With passport.js
        * https://www.djamware.com/post/58bd823080aca7585c808ebf/nodejs-expressjs-mongoosejs-and-passportjs-authentication
        * https://github.com/didinj/node-express-passport-mongoose-auth
        * https://github.com/manjeshpv/passport-local-express4-mongoose-example
        * https://appdividend.com/2017/12/21/simple-nodejs-authentication-system-using-passport/
        * http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/#.WvqizaSFNpg
        * https://github.com/mjhea0/passport-local-express4
        * https://scotch.io/tutorials/easy-node-authentication-setup-and-local
        * https://github.com/scotch-io/easy-node-authentication
        * https://blog.risingstack.com/node-hero-node-js-authentication-passport-js/
* Apply a caching mechanism
* Support search or filter functionality
* Routing issue - https://stackoverflow.com/questions/21067717/angularjs-and-express-routing-issue
* ~~Cannot upload images with large sizes~~