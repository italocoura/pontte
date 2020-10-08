const mongoose = require('mongoose');

const url = "mongodb+srv://dbTeste:WJGHLp6rDPa7UQF@cluster0.fs6ho.mongodb.net/contratosDatabase?retryWrites=true&w=majority";

mongoose.connect(url, 
{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

mongoose.createConnection(url, 
{ useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;


