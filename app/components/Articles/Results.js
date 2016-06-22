import React from 'react';
import Article from '../Article'

var Results = React.createClass({

	getInitialState: function(){
		return {
			button: this.props.button,
			queryResults: this.props.queryResults
		}
	},

	render: function(){
		
		var articles = []
		// articles = this.props.articles;
		debugger;
		this.state.queryResults.forEach(function(article){
			
			articles.push(<Article button={this.props.button}title={article.headline.main} url={article.web_url} key={article._id}/>)
			
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
});

module.exports = Results;






















