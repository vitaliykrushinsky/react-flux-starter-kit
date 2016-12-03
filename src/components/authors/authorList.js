"use strict";

let React = require('react');

let AuthorsList = React.createClass({

    propTypes: {
      authors: React.PropTypes.array.isRequired
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
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {/*receive Author list data from parent component*/}
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorsList;