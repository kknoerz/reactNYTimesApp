var React = require('react');
var Router = require('react-router');
import Search from './Search';

var GetSearchTerm = React.createClass({
  mixins: [Router.History],
  getRef: function(ref){
    this.queryRef = ref;
  },
  handleSubmit: function(){
    // debugger;
    var queryTerm = this.queryRef.value;
    this.queryRef.value = '';
    console.log('This is queryTerm: ', queryTerm);
    this.history.pushState(null, "search/" + queryTerm);
  },

  showArticles: function(){
    this.history.pushState(null, "/saved");
  },

  render: function(){
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-6">
            <input type="text" className="form-control" ref={this.getRef} />
          </div>
          <div className="form-group col-sm-3">
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
