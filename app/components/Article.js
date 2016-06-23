import React from 'react';
import helpers from '../utils/helpers.js';
import Results from './Articles/Results';
import Router from 'react-router';

var Article = React.createClass({

	getInitialState: function(){
		return {
			button: this.props.button
		}
	},

	handleClick: function() {

		if(this.props.button == 'Save'){
			helpers.save(this.props.title, this.props.url).then(function(res){
	    		return res
	    		
    		}.bind(this));
		}else if (this.state.button == 'Remove'){
			debugger;
			var id = this.props.id
			helpers.remove(id).then(function(res){
				// return res
				debugger;
				this.setState({
					button: 'Deleted'
				})		
    		}.bind(this));
		}
   },

	render: function() {

		return (
			<li className="list-item" style={{listStyle:"none", padding:"5px", border:'1px solid #ccc', marginBottom: '2px'}}>
				<a href={this.props.url} target="_blank" style={{textDecoration:"none"}}>
					<h4 style={{textAlign:'center'}}>{this.props.title}</h4>				
				</a>
				<div style={{display:'block', textAlign:'center'}}>				
					<span className="btn">
						<button onClick={this.handleClick}>
							{this.state.button}
						</button>
					</span>					
				</div>									
			</li>
		)
	}
});

module.exports = Article;