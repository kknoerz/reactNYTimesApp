var React = require('react');
var Router = require('react-router');
import Search from './Search';

var GetSearchTerm = React.createClass({
  mixins: [Router.History],
  getQuery: function(query){
    this.queryRef = query;
  },

  getStartYear: function(start){
    this.startYear = start;
  },

  getEndYear: function(end){
    this.endYear = end;
  },

  handleSubmit: function(){
    // debugger;
    var queryTerm = this.queryRef.value; 
    var startYear = this.startYear.value;
    var endYear = this.endYear.value;
    this.queryRef.value = '';
    this.startYear.value = '';
    this.endYear.value = '';
    debugger;
    this.history.pushState(null, "search/" + queryTerm + "/" + startYear + "/" + endYear);
  },

  showArticles: function(){
    this.history.pushState(null, "/saved");
  },

  render: function(){
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-12">
            <input placeholder="Search: " type="text" className="form-control" id="query" ref={this.getQuery} />
          </div>
          <div className="form-group col-sm-12">
            <input placeholder="Start Year"type="text" className="form-control" id="start" ref={this.getStartYear} />
          </div>
          <div className="form-group col-sm-12">
            <input placeholder="End Year"type="text" className="form-control" id="end" ref={this.getEndYear} />
          </div>
          <div className="form-group col-sm-3 col-sm-offset-3">
            <button type="submit" className="btn btn-block btn-default">Search NY Times</button>
          </div>
        </form>
        <form onSubmit={this.showArticles}>
          <div className="form-group col-sm-3">
            <button type="submit" className="btn btn-block btn-defualt">Show Saved Articles</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = GetSearchTerm;
