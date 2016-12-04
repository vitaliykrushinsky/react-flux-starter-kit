"use strict";

window.$ = window.jQuery = require('jquery');
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function (Handler) { // pass Router.HistoryLocation as second parameter to delete # from url
   React.render( <Handler />, document.getElementById('app') );
});