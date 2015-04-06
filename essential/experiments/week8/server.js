//var express = require('express');
//var app = express();

var express = require('express');
var app = express();
var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static(__dirname + '/public'));


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data


var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/cs5610');

var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/cs5610';
mongoose.connect(connectionString);


//create schema -- fields and types
var FormSchema = new mongoose.Schema({
    name: String,
    created: { type: Date, default: Date.now }
}, { collection: 'form' });


//datamodel created from schema to create a new form
//allows us to interact with database
//collection -- find insert update delete only which match schema
//equivalent to entity manager in java
var Form = mongoose.model("Form", FormSchema);



//new object form form to insert data.. should be same as schema
//We will be dynamically adding objects for this experiment
//var form2 = new Form({ name: "form2", created: new Date() });
//form2.save();
//var form1 = new Form({ name: "form1", created: new Date() });
//form1.save();
//var form3 = new Form({ name: "form3", created: new Date() });
//form3.save();
//var form3 = new Form({ name: "form3", created: new Date() });
//form3.save();


//to recieve the data
Form.find(getData);

function getData(err, data) {
    console.log(err);
    console.log(data);
}


//return the json for this URL
app.get('/api/form', function (req, res) {
    Form.find(function (err, data) {
        res.json(data);
    });
});

//return the particular object for this URL
app.get('/api/form/:id', function (req, res) {
    Form.findById(req.params.id, function (err, data) {
        res.json(data);
    });
});


//deletes the json corresponding to given id
app.delete('/api/form/:id', function (req, res) {
    Form.remove({ _id: req.params.id }, function (err, count) {
        console.log(err);
        console.log(count);
        Form.find(function (err, data) {
            res.json(data);
        });
    });

});

//Adds a new Json into the mongodb
app.post('/api/form', function (req, res) {
    var form = new Form(req.body);
    form.save(function (err, doc) {
        console.log(err);
        console.log(doc);
        Form.find(function (err, docs) {
            res.json(docs);
        });
    });

});



var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);

//app.listen(3000);