var express = require('express');
var request = require('request');
var router = express.Router();
var Articles = require('../models/schema');

//Database configuration
var mongojs = require('mongojs');
var mongoose = require('mongoose');

if (process.env.MONGODB_URI){
	mongoose.connect(process.env.MONGODB_URI);
} else {
	mongoose.connect('mongodb://localhost/reactNYTimes');	
}

var db = mongoose.connection;

db.on('error', function (err) {
	console.log('Mongoose Error: ', err);
});
db.once('open', function () {
	console.log('Mongoose connection successful.');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/save/:title/:url*', function(req, res, next) {
	Articles.create({
		title: req.params.title,
		url: req.params.url
	}, function(err){
		console.log('Error saving: ', err);
		res.end();
	});
});

router.post('/saved', function(req, res, next) {

	Articles.find({}).then(function(saved){
			res.send(saved)
	});
});

router.post('/remove/:id', function(req, res, next) {

	Articles.remove({
		_id: req.params.id
	}, function(err) {

		if (err) {
			console.log('Error removing: ', err);
		}

	res.end();
	});
});

module.exports = router;
