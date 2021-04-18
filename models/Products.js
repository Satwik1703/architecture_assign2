const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	productId: String,
	category: String,
	productName: String,
	productModel: String,
	price: Number,
	availableQuantity: Number
});

module.exports = mongoose.model('Products', ProductSchema);
