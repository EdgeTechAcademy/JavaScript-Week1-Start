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

router.productsForOrders = function(prod) {
	for ( var i = 0; i < products.length; i++) {
		if (products[i].ProductNo == prod) {
			return products[i];
		}
	}
};

var products = [];

router.init = function() {
	products.push(new Product( 1, 'Prod  1'));
	products.push(new Product( 2, 'Prod  2'));
	products.push(new Product( 3, 'Prod  3'));
	products.push(new Product( 4, 'Prod  4'));
	products.push(new Product( 5, 'Prod  5'));
	products.push(new Product( 6, 'Prod  6'));
	products.push(new Product( 7, 'Prod  7'));
	products.push(new Product( 8, 'Prod  8'));
	products.push(new Product( 9, 'Prod  9'));
	products.push(new Product(10, 'Prod 10'));
	products.push(new Product(11, 'Prod 11'));
	products.push(new Product(12, 'Prod 12'));
	products.push(new Product(13, 'Prod 13'));
	products.push(new Product(14, 'Prod 14'));
	products.push(new Product(15, 'Prod 15'));
	products.push(new Product(16, 'Prod 16'));
	products.push(new Product(17, 'Prod 17'));
	products.push(new Product(18, 'Prod 18'));
	products.push(new Product(19, 'Prod 19'));
	products.push(new Product(20, 'Prod 20'));
	products.push(new Product(21, 'Prod 21'));
	products.push(new Product(22, 'Prod 22'));
	products.push(new Product(23, 'Prod 23'));
	products.push(new Product(24, 'Prod 24'));
};

router.count = function() { return products.length; };
