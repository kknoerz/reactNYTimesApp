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
		

		helpers.getSaved(function(saved){
			

			this.setState({
				queryResults: saved.data			
			});
		}.bind(this));
		
	},

	render: function(){
		
		return (

			<div className="row">
				<div className="col-sm-8 col-sm-offset-2">
					<Results title="Saved Articles" button={this.state.button} queryResults={this.state.queryResults} />
				</div>
			</div>

		);
	}

});

module.exports = Saved;





