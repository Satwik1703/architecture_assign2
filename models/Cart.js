const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
	user: String,
	cart: [{
		productId: String,
		productName: String,
		amount: Number,
		quantity: Number
	}]
});

module.exports = mongoose.model('Cart', CartSchema);
