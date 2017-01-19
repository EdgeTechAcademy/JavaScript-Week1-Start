/**
 * Created by Edge Tech Academy on 1/19/2017.
 */
var express = require('express');
var router = module.exports = express.Router();

/* GET product list page. */
router.get('/', function(req, res) {
	res.render('products', { title: 'Products in Inventory', prodList: products });
});

var Product = function(prodNo, desc) {
	this.ProductNo = prodNo;
	this.Description = desc;
};

router.productsForOrders = function(productNo) {
	//  TODO: Find the Product in the products array that matches the productNo parameter.
	//      Once found return that Product
};

var products = [];

router.init = function() {
	//  TODO: Create 24 Products
	//      ProductNo is just 1 to 24
	//      Description is any string you want
	//      add them to the products array
};

router.count = function() {
	//  TODO: return the number of Products in the products array
};
