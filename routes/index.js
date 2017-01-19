var express = require('express');
var customers = require('./customer');
var products  = require('./product');
var orders    = require('./order');
var router = module.exports = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express', customerCount: customers.count() , productCount: products.count() , orderCount: orders.count() });
});
