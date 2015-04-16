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

var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/tickster-test';
mongoose.connect(connectionString);


//create schema -- fields and types
var FormSchema = new mongoose.Schema({
    name: String,
    created: {type: Date, default: Date.now}
}, {collection : 'form'});


var likeSchema = mongoose.Schema({
    useremail: String,
    movieid: String,
});

var Like = mongoose.model('Like', likeSchema);



app.get('/like/:id/:email', function (req, res) {

    var email = req.params.email;
    var id = req.params.id;

    var like = new Like();
    like.useremail = email;
    like.movieid = id;

    Like.findOne({ useremail: email, movieid: id }, function (err, result) {
        if (result == null) {
            like.save(function (err, like) {
                if (err) {
                    return console.error(err);
                }
                else {
                    res.send("Unlike");
                }
            });
        }
    });
});

app.get('/unlike/:id/:email', function (req, res) {

    var email = req.params.email;
    var id = req.params.id;

    var like = new Like();
    like.useremail = email;
    like.movieid = id;

    Like.findOne({ useremail: email, movieid: id }, function (err, result) {
        if (result != null) {
            Like.remove({ useremail: email, movieid: id }, function (err) {
                if (err) {
                    return console.error(err);
                }
                else {
                    res.send("Like");
                }
            });
        }
    });
});

app.get('/checklikeUnlike/:id/:email', function (req, res) {
    var email = req.params.email;
    var id = req.params.id;

    Like.findOne({ useremail: email, movieid: id }, function (err, result) {
 
        if (result != null) {
            res.send("Unlike");
        }
        else {
            res.send("Like");
        }
    });
});

app.get('/getLikes/:useremail', function (req, res) {
    var email = req.params.useremail;
 
    Like.find({ useremail: email }).exec(
        function (err, result) {
            res.send(result);
        });
});

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);
