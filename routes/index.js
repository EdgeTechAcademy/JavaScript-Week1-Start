var express = require('express');
var customers = require('./customer');
var products  = require('./product');
var orders    = require('./order');
var router = module.exports = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//  TODO: you need to get the number of Customers, Products and Orders
	//      to render the index.jade page.
	res.render('index', { title: 'Express', customerCount: // TODO: where will you get this value?
											productCount:  // TODO: where will you get this value?
											orderCount:    // TODO: where will you get this value?
	});
});
