"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var NotFoundPage = require('./components/404');
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <NotFoundRoute handler={NotFoundPage}/>
        <Redirect from="about-us" to="about"/>
        <Redirect from="about/*" to="about"/>
        <Redirect from="awthors" to="authors"/>
    </Route>
);

module.exports = routes;