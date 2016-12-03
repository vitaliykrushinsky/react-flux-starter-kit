"use strict";

let React = require('react');
let Router = require('react-router');
let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;
let NotFoundRoute = Router.NotFoundRoute;
let NotFoundPage = require('./components/404');

let routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <NotFoundRoute handler={NotFoundPage}/>
    </Route>
);

module.exports = routes;