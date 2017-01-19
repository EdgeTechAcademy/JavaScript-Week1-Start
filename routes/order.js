/**
 * Created by Edge Tech Academy on 1/19/2017.
 */
var express = require('express');
var router = module.exports = express.Router();
var products = require('./product');

/* GET order list page. */
router.get('/', function(req, res) {
	var orderInfo  = {};
	var orderDetails = [];
	for ( var c = 0; c < orders.length; c++) {
		orderInfo = { Order: orders[c], productList: [] };
		for ( var p = 0; p < orders[c].ProductNo.length; p++) {
			orderInfo.productList.push(products.productsForOrders(orders[c].ProductNo[p]));
		}
		orderDetails.push(orderInfo);
	}
	//  TODO: 7 Describe the contents of the orderDetails object
	res.render('orders', { title: 'Current Orders', orderList: orderDetails });
});

router.ordersForCustomer = function(cust) {
	var myOrders = [];
	//  TODO: 8 add to the myOrders array
	//          add all orders with the same CustomerNo as the cust parameter
	return myOrders;
};

var Order = function(orderNo, cust, prod) {
	this.OrderNo = orderNo;
	this.CustomerNo = cust;
	this.ProductNo = prod;
};

var orders = [];

router.init = function() {
	orders.push(new Order('Order  1a', 'Cust 1', [ 1,  2,  3]));
	orders.push(new Order('Order  1b', 'Cust 1', [ 2, 23]));
	orders.push(new Order('Order  2a', 'Cust 1', [10, 12, 14, 16,  3]));
	orders.push(new Order('Order  2b', 'Cust 1', [ 8]));
	orders.push(new Order('Order  3a', 'Cust 2', [ 3,  6,  9, 22]));
	orders.push(new Order('Order  3a', 'Cust 2', [16, 18, 19]));
	orders.push(new Order('Order  4a', 'Cust 2', [17,  5, 11,  4, 11, 18, 22]));
	orders.push(new Order('Order  5a', 'Cust 3', [15, 20]));
	orders.push(new Order('Order  6a', 'Cust 3', [ 6, 12]));
	orders.push(new Order('Order  6b', 'Cust 3', [ 8, 11, 13]));
	orders.push(new Order('Order  6c', 'Cust 3', [15,  4, 22, 20]));
	orders.push(new Order('Order  7a', 'Cust 4', [18]));
	orders.push(new Order('Order  8a', 'Cust 4', [ 1, 15, 13, 8, 16, 24, 17]));
	orders.push(new Order('Order  9a', 'Cust 5', [ 9, 3, 16]));
	orders.push(new Order('Order 10a', 'Cust 5', [10, 20,  6, 15]));
	orders.push(new Order('Order 11a', 'Cust 6', [11, 22,  9, 14]));
	orders.push(new Order('Order 12a', 'Cust 6', [12, 24, 12, 13]));
};

router.count = function() {
	//  TODO: 9 Return the number of orders
};
