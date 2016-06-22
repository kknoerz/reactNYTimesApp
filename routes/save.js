// var express = require('express');
// var request = require('request');
// var router = express.Router();

// //Database configuration
// var mongojs = require('mongojs');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/reactNYTimes');
// var db = mongoose.connection;

// db.on('error', function (err) {
// 	console.log('Mongoose Error: ', err);
// });
// db.once('open', function () {
// 	console.log('Mongoose connection successful.');
// });

// router.post('/save/:title/:url*', function(req, res, next) {
// 	debugger;
//   console.log('inside saved');
//   // res.sent('Working!');
// });

// module.exports = router;