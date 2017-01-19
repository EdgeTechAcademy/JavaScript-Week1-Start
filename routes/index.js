var express = require('express');
var customers = require('./customer');
var products  = require('./product');
var orders    = require('./order');
var router = module.exports = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//  TODO: 3 you need to get the number of Customers, Products and Orders
	//      to render the index.jade page.
	res.render('index', { title: 'Express', customerCount: 0,   //  TODO: 4 where will you get this value?
											productCount:  0,   //  TODO: 5 where will you get this value?
											orderCount:    0 });//  TODO: 6 where will you get this value?
});
