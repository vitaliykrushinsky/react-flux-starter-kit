"use strict";

let React = require('react');

let Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>
                    React, Flux, and React Router combined with Browserify, Gulp, and Bootstrap for ultra responsive web app
                </p>
            </div>
        );
    }
});

module.exports = Home;
