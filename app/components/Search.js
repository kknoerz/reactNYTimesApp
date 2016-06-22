var React = require('react');
var Router = require('react-router');

var Results = require('./Articles/Results');
import Saved from './Saved';

var helpers = require('../utils/helpers');

var Search = React.createClass({

	getInitialState: function(){
		return {
			queryResults: [],
			button: 'Save'
		}
	},
	componentDidMount: function(){

		helpers.getAllArticles(this.props.params.queryTerm)
		.then(function(data){

			this.setState({
				queryResults: data.queryResults
				
			})
		}.bind(this));
	},

	render: function(){

		return(

			<div className="row">
				<div className="col-md-8">
					<Results button={this.state.button} queryResults={this.state.queryResults} />
				</div>
			</div>

		)
	}
});

module.exports = Search;
