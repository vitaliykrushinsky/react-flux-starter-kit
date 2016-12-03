"use strict";

let React = require('react');
let authorApi = require('../../api/authorApi');
let AuthorList = require('./authorList');

let AuthorsPage = React.createClass({
    getInitialState: function () {
        return {
            authors: []
        };
    },

    componentDidMount: function () {

        if (this.isMounted()) {
            this.setState({ authors: authorApi.getAllAuthors() }); // get AuthorsPage list
        }
    },

    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                {/*pass AuthorsPage list to child component*/}
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = AuthorsPage;