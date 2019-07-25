'use strict';

module.exports = (app) => {
    // First product controller is included, then in app.route products route is created. 
    var product = require('../controller/productController');

    // product.products GET method is used for 
    // fetching all products and product.add POST method for adding a product
    app.route("/products")
        .get(product.products)
        .post(product.add);

    // /product/:productId route is created to fetch, update or delete a product. 
    // Client is required to send a productId with request. 
    // product.getproduct controller method is used to get a single product information. 
    // To update a product information product.update method is defined. 
    // Next for deleting a product, delete method of controller is used.
    app.route("/products/:productId")
        .get(product.getproduct)
        .put(product.update)
        .delete(product.delete);
};

// Create-----POST -> http://localhost:3000/products
// Read all----GET -> http://localhost:3000/products
// Read single-GET -> http://localhost:3000/products/getproduct/?productId=589a18039341bf7e6dad5f77
// Update------PUT -> http://localhost:3000/products/update/?productId=589a18039341bf7e6dad5f77
// Delete---DELETE -> http://localhost:3000/products/delete/?productId=589a18039341bf7e6dad5f77