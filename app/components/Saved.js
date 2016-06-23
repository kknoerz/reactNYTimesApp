import React from 'react';
var helpers = require('../utils/helpers');
import Results from './Articles/Results';

var Saved = React.createClass({

	getInitialState: function(){
		return {
			queryResults: [],
			button: 'Remove'
		}
	},	

	componentWillMount: function(){
		debugger;

		helpers.getSaved(function(saved){
			debugger;

			this.setState({
				queryResults: saved.data			
			});
		}.bind(this));
		
	},

	render: function(){
		debugger;
		return (

			<div className="row">
				<div className="col-md-8">
					<Results title="Saved Articles" button={this.state.button} queryResults={this.state.queryResults} />
				</div>
			</div>

		);
	}

});

module.exports = Saved;





