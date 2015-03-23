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

//new object form form to insert data.. should be same as schema
var form2 = new Form({ name: "form2", created: new Date() });

form2.save();