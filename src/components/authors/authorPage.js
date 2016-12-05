"use strict";

let React = require('react');
let Link = require('react-router').Link;
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
                <Link to="addAuthor" className="btn btn-primary">Add Author</Link>
                {/*pass AuthorsPage list to child component*/}
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = AuthorsPage;