const controller = require('../controllers/controllers.js');

module.exports = function(app) {
	app.route('/')
		.get(controller.home);

	app.route('/rest/v1/products')
		.get(controller.productApi);

	app.route('/rest/v1/users/:user/cart')
		.get(controller.getCart);

		app.route('/rest/v1/users/:user/cart')
			.put(controller.updateCart);
}
