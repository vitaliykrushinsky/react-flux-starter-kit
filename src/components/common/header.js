"use strict";

let React = require('react');
let Router = require('react-router');
let Link = Router.Link;

let Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img src="images/pluralsight-logo.png" />
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#authors">Authors</a></li>
                        <li><a href="#about">About</a></li>
                        {/*<li><Link to="app">Home</Link></li>*/}
                        {/*<li><Link to="authors">Authors</Link></li>*/}
                        {/*<li><Link to="about">About</Link></li>*/}
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
