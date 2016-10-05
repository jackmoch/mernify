'use strict';

const React = require('react');
const ReactDOM = require('react-dom');


const Test = React.createClass({
  render: function() {
    return (
      <div>
      	<div>
      		<a href="/login">Login with Spotify</a>
      	</div>
      </div>
    )
  }
});

ReactDOM.render(
  <Test />,
  document.getElementById('main')
);