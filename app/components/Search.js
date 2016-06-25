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

		
		var queryTerm = this.props.params.queryTerm;
		var startYear = this.props.params.startYear;
		var endYear = this.props.params.endYear;

		helpers.getAllArticles(queryTerm, startYear, endYear)
		.then(function(data){
			
			this.setState({
				queryResults: data.queryResults
				
			})
		}.bind(this));
	},

	render: function(){

		return(

			<div className="row">
				<div className="col-sm-8 col-sm-offset-2">
					<Results button={this.state.button} queryResults={this.state.queryResults} />
				</div>
			</div>

		)
	}
});

module.exports = Search;
