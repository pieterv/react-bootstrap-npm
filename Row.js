/** @jsx React.DOM */

var React = require('react');
var PropTypes = require('./PropTypes');


var Row = React.createClass({displayName: 'Row',
  propTypes: {
    componentClass: PropTypes.componentClass
  },

  getDefaultProps: function () {
    return {
      componentClass: React.DOM.div
    };
  },

  render: function () {
    var componentClass = this.props.componentClass;

    return this.transferPropsTo(
      componentClass( {className:"row"}, 
        this.props.children
      )
    );
  }
});

module.exports = Row;