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

### Current features
1. Create a new product category. Notice that, currently we support JPEG images only.
2. List all product categories
3. Delete a selected product category

### TODOs
* Clean code - Remove all codes related to "Book", including database scripts, configuration...
* Support all types of images instead of JPEG only
* Upgrade UI by using css & change the UX
* Cannot upload images with large sizes