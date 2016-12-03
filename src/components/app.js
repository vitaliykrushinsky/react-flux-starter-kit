"use strict";

let React = require('react');
let Header = require('./common/header');
let RouteHandler = require('react-router').RouteHandler;

let App = React.createClass({
    render: function () {

        return(
            <div>
                <Header/>
                <RouteHandler />
            </div>
        );
    }
});

module.exports = App;