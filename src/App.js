'use strict';

const React = require('react');
const ReactDOM = require('react-dom');


var Test = React.createClass({
  render: function() {
    return (
      <div>Testing Div</div>
    )
  }
});

ReactDOM.render(
  <Test />,
  document.getElementById('main')
);

console.log('test')