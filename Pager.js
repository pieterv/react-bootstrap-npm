/** @jsx React.DOM */

var React = require('react');
var utils = require('./utils');
var ValidComponentChildren = require('./ValidComponentChildren');

var Pager = React.createClass({displayName: 'Pager',

  propTypes: {
    onSelect: React.PropTypes.func
  },

  render: function () {
    return this.transferPropsTo(
      React.DOM.ul(
        {className:"pager"}, 
        ValidComponentChildren.map(this.props.children, this.renderPageItem)
      )
    );
  },

  renderPageItem: function (child) {
    return utils.cloneWithProps(
      child,
      {
        onSelect: utils.createChainedFunction(child.props.onSelect, this.props.onSelect),
        ref: child.props.ref,
        key: child.props.key
      }
    );
  }
});

module.exports = Pager;