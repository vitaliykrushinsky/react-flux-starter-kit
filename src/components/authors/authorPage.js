"use strict";

let React = require('react');
let authorApi = require('../../api/authorApi');

let Authors = React.createClass({
    getInitialState: function () {
        return {
            authors: []
        };
    },

    componentWillMount: function () {
        this.setState({ authors: authorApi.getAllAuthors() })
    },

    render: function () {
        let createAuthorRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            )
        };
        return (
            <div>
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.state.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Authors;