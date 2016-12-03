"use strict";

let React = require('react');
let Link = require('react-router').Link;

let Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>
                    React, Flux, and React Router combined with Browserify, Gulp, and Bootstrap for ultra responsive web app
                </p>
                <Link to="about" className="btn btn-success btn-lg">Learn More</Link>
            </div>
        );
    }
});

module.exports = Home;
