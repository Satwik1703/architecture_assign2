const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const database = require('./database.js');
const createProducts = require('./models/createProducts.js');
const createCart = require('./models/createCart.js');
database();
// createProducts();
// createCart();

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const routes = require('./routes/routes.js');
routes(app);

app.listen(port, function() {
   console.log('Server is listening on port: ' + port);
});
