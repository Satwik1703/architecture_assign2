const mongoose = require('mongoose');
const url = 'mongodb+srv://satwik:Satwik@architecture.nyoy6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const database = () => {
	mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
	.then(res => {
		console.log('Connected to Database');
	})
	.catch(err => {
		console.log("An Error has Occured in Connecting to Database\n", err);
	})
}

module.exports = database;
