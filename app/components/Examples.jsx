var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
  <div>
    <h1 className="text-center">Examples</h1>
    <p>Here are a few examples locations to try out:</p>
    <ol>
      <li>
        <link to='/?location=Avignon'>Avignon, FRANCE</link>
      </li>
      <li>
        <link to='/?location=Rio'>Rio, BRAZIL</link>
      </li>
    </ol>
  </div>
  )
};

module.exports = Examples;
