/** @jsx React.DOM */

var React = require('react');
var ValidComponentChildren = require('./ValidComponentChildren');

var Badge = React.createClass({displayName: 'Badge',
  render: function () {
    return this.transferPropsTo(
      React.DOM.span( {className:ValidComponentChildren.hasValidComponent(this.props.children) ? 'badge': null}, 
        this.props.children
      )
    );
  }
});

module.exports = Badge;