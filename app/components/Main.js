var React 		= require('react');
var GetSearchTerm = require('./GetSearchTerm');

var Main = React.createClass({
	render: function(){

		return(
			<div className="main-container">
				<nav className="navbar navbar-default" role="navigation">
					<div className="col-md-8 col-md-offset-2" style={{marginTop: 15}}>

			      <GetSearchTerm />
			      
					</div>
				</nav>	
				<div className="container">					
					{this.props.children}
				</div>
			</div>
		)

	}
});


module.exports = Main;



