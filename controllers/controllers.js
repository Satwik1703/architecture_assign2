const Products = require('../models/Products.js');
const Cart = require('../models/Cart.js');

const users = ['satwik', 'test', 'raghu'];

var controllers = {
	home: function(req, res) {
		res.json('Software Architecture Assignment 2');
	},

	productApi: function(req, res) {
		Products.find({}, '-_id -__v', function(err, docs){
			if(err){
				res.json("Error in fetching the Products from database");
			}
			res.json(docs);
		})
	},

	getCart: function(req, res) {
		if(!users.includes(req.params.user)){
			res.json('User not found.... Available users are '+ users);
		}

		Cart.findOne({user: req.params.user}, '-_id -__v', function(err, docs){
			if(err) {
				res.json("Error in fetching the Cart from the user");
			}
			res.json(docs);
		})
	},

	updateCart: function(req, res) {
		if(!users.includes(req.params.user)){
			res.json('User not found.... Available users are '+ users);
		}

		Products.findOne({productId: req.body.productId}, function(err, docs){
			if(err){
				res.json("Error has Occured in PUT request");
			}
			if(!docs){
				res.json("Please enter the correct Product ID");
			}
			Cart.findOneAndUpdate(
				{user: req.params.user},
				{$push: {cart: {productId: docs.productId, productName: docs.productName, quantity: req.body.quantity, amount: req.body.quantity*docs.price}}},
				{new: true},
				function(err, docs){
					if(err){
						res.json("Error in Updating the Cart");
					}
					res.json(docs);
				}
			)
		})
	}
}

module.exports = controllers;
