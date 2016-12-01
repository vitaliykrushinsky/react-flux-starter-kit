"use strict";

window.$ = window.jQuery = require('jquery');
let React = require('react');
let Home = require('./components/homePage');
let About = require('./components/about/aboutPage');
let Header = require('./components/common/header');

let App = React.createClass({
    render: function () {
        let Child;

        switch (this.props.route) { // check hash
            case 'about':
                Child = About;
                break;
            default:
                Child = Home;
        }

        return(
            <div>
                <Header/>
                <Child/>
            </div>
        );
    }
});

function render() {
    let route = window.location.hash.substr(1); // detect hash of URL
    React.render(<App route={route} />, document.getElementById('app')); // path hash to app
}

window.addEventListener('hashchange', render);
render();