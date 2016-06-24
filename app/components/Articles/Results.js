import React from 'react';
import Article from '../Article';
import helpers from '../../utils/helpers'

var Results = React.createClass({

	getInitialState: function(){
		debugger;
		return {
			button: this.props.button,
			queryResults: this.props.queryResults
		}
	},

	componentWillReceiveProps: function(nextProps){
		// debugger;

		this.setState({
			queryResults: nextProps.queryResults
		});	
		
		// debugger;
	},

	remove: function(val){
		debugger;
		// var searchAndDestroy = this.state.queryResults.find(title);
		// this.state.queryResults.splice(searchAndDestroy, 1);

		// debugger;
		// this.forceUpdate()
		var destroy = this.state.queryResults;

		var search = destroy.map(function(e) { 
			return e.title; 
		}).indexOf(val);
		debugger;

		destroy.splice(search, 1);
		debugger;
		this.setState({
			queryResults: destroy
		});

	},

	render: function(){

		if(this.state.queryResults) {
			var articles = []

			debugger;

			this.state.queryResults.forEach(function(article){

				if(article.headline != undefined) {
					articles.push(<Article button={this.props.button}title={article.headline.main} url={article.web_url} key={article._id} id={article._id}/>)
				} else if (article.title) {
					articles.push(<Article button={this.props.button}title={article.title} url={article.url} key={article._id} id={article._id} remove={this.remove}/>)
				}				
				
			}.bind(this));

			return (
				<div className="main-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="panel panel-primary">
								<div className="panel-body">
									<ul className="list-group">
										{articles}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
});

module.exports = Results;






















