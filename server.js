/*Created by mansisoni on 4/7/2017.*/
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

mongoose = require('mongoose'),
Task = require('../petsapi/models/petsModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Petsdb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('../petsapi/routes/petsRoutes');
routes(app);

app.listen(port);
console.log('Pets RESTful API server started on: ' + port);

