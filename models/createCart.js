const Cart = require('./Cart.js');

const createCart = () => {
	Cart.create(
		{
			user: "satwik",
			cart:[
				{
					productId: "12445dsd234",
					productName: "Samsung",
					quantity: 2,
					amount: 1400
				},
				{
					productId: "124sd234",
					productName: "Google",
					quantity: 200,
					amount: 280000
				}
			]
		},
		{
			user: "test",
			cart:[
				{
					productId: "1dsd234",
					productName: "abc",
					quantity: 1,
					amount: 14
				}
			]
		},
		{
			user: "raghu",
			cart:[
				{
					productId: "12445d",
					productName: "Samg",
					quantity: 6,
					amount: 1200
				},
				{
					productId: "sd234",
					productName: "Google",
					quantity: 2,
					amount: 280
				}
			]
		}
	)
	.then(res => {
		console.log('Cart is Created');
	})
	.catch(err => {
		console.log("Error Occured during Cart Creation");
	})
};

module.exports = createCart;
