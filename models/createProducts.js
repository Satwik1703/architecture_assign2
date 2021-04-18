const Products = require('./Products.js');

const createProducts = () => {
	Products.create(
		{
			productId: "12445dsd234",
			category: "Modile",
			productName: "Samsung",
			productModel: "GalaxyNote",
			price: 700,
			availableQuantity: 10
		},
		{
			productId: "123245ds4234",
			category: "TV",
			productName: "Sony",
			productModel: "Bravia",
			price: 1200,
			availableQuantity: 6
		}
	)
	.then(res => {
		console.log('Products are Created');
	})
	.catch(err => {
		console.log("Error Occured during Products Creation");
	})
};

module.exports = createProducts;
