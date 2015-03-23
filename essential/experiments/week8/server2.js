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

//to recieve and update the data
Form.find(getData);

function getData(err, data) {
    console.log(err);
    console.log(data);
}


Form.findById("550e86fa2f0ae1702e2ecb5a", function (err, data) {
    data.name = "Form update 123";
    data.save();
    console.log(err);
    console.log(data);
});