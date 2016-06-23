import React from 'react';
import Article from '../Article'

var Results = React.createClass({

	getInitialState: function(){
		debugger;
		return {
			button: this.props.button,
			queryResults: this.props.queryResults
		}
	},

	componentWillReceiveProps: function(nextProps){
		debugger;

		this.setState({
			queryResults: nextProps.queryResults
		});	
		
		debugger;
	},

	render: function(){

		if(this.state.queryResults) {
			var articles = []

			debugger;

			this.state.queryResults.forEach(function(article){

				if(article.headline != undefined) {
					articles.push(<Article button={this.props.button}title={article.headline.main} url={article.web_url} key={article._id} id={article._id}/>)
				} else if (article.title) {
					articles.push(<Article button={this.props.button}title={article.title} url={article.url} key={article._id} id={article._id}/>)
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






















