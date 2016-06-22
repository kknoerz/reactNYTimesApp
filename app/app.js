// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grab the property associated with the Router
var Router = require('react-router').Router;

// Grabs the "routes"
var routes = require('./config/routes');

// This code here allows us to render our main component (in this case "Form")
ReactDOM.render(

	<Router>{routes}</Router>,
	document.getElementById('app')
)
