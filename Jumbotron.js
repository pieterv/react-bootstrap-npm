/** @jsx React.DOM */

var React = require('react');
var classSet = require('react/lib/cx');

var Jumbotron = React.createClass({displayName: 'Jumbotron',

  render: function () {
    return this.transferPropsTo(
      React.DOM.div( {className:"jumbotron"}, 
        this.props.children
      )
    );
  }
});

module.exports = Jumbotron;