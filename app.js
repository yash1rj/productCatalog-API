var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var mongoose = require('mongoose');

var Product = require('./restapi/model/productModel');

var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/onlinestore', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./restapi/routes/productRoutes');

routes(app);

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log('Product Catalog -  RESTful web services with Nodejs started on: ' + port);