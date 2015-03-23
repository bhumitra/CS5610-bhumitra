var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cs5610');

//create schema -- fields and types
var FormSchema = new mongoose.Schema({
    name: String,
    created: {type: Date, default: Date.now}
}, {collection : 'form'});


//datamodel created from schema to create a new form
//allows us to interact with database
//collection -- find insert update delete only which match schema
//equivalent to entity manager in java
var Form = mongoose.model("Form", FormSchema);

//to recieve the data
Form.find(getData);

function getData(err, data) {
    console.log(err);
    console.log(data);
}



app.get('/api/form', function (req, res) {
    Form.find(function (err, data) {
        res.json(data);
    });
});

app.get('/api/form/:id', function (req, res) {
    Form.findById(req.params.id, function (err, data) {
        res.json(data);
    });
}); 

//var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
//var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

//app.listen(port, ip);

app.listen(3000);