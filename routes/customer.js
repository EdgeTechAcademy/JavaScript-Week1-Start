/**
 * Created by Edge Tech Academy on 1/19/2017.
 */
var express = require('express');
var router = module.exports = express.Router();
var orders = require('./order');

/* GET product list page. */
router.get('/', function(req, res) {
	var custInfo  = {};
	var customerDetails = [];
	for ( var c = 0; c < customers.length; c++) {
		custInfo = { Customer: customers[c], orderList: [] };
		custInfo.orderList = orders.ordersForCustomer(customers[c].CustomerNo);
		customerDetails.push(custInfo);
	}
	//  TODO: 1 Describe the contents of the customerDetails object.
	res.render('customers', { title: 'Our Customers', customerDetails: customerDetails });
});

var Customer = function(prodNo, desc) {
	this.CustomerNo = prodNo;
	this.Description = desc;
};

var customers = [];

router.init = function() {
	customers.push(new Customer( 'Cust 1', 'East Coast'));
	customers.push(new Customer( 'Cust 2', 'West Coast'));
	customers.push(new Customer( 'Cust 3', 'Red States'));
	customers.push(new Customer( 'Cust 4', 'Blue States'));
	customers.push(new Customer( 'Cust 5', 'Canada'));
	customers.push(new Customer( 'Cust 6', 'Mexico'));
};

router.count = function() {
	//  TODO: 2 Return the number of Customers in the customers array
};
