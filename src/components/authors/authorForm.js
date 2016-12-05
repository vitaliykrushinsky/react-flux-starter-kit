"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    // check pass data from parent component
    propTypes: {
        author:	React.PropTypes.object.isRequired,
        onSave:	React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function () {
        return (
            <form>
                <h1>Manage Author</h1>
                <Input label="First Name"
                       name="firstName"
                       placeholder="First Name"
                       value={this.props.author.firstName}
                       onChange={this.props.onChange}
                       error={this.props.errors.firstName}/>

                <Input label="Last Name"
                       name="lastName"
                       placeholder="Last Name"
                       value={this.props.author.lastName}
                       onChange={this.props.onChange}
                       error={this.props.errors.lastName}/>

                <input onClick={this.props.onSave} type="submit" value="Save" className="btn btn-default" />
            </form>
        );
    }
});

module.exports = AuthorForm;

/*
var AuthorForm = React.createClass({
    render: function () {
        return (
            <form>
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                       name="firstName"
                       className="form-control"
                       placeholder="First Name"
                       ref="firstName"
                       onChange={this.props.onChange}
                       value={this.props.author.firstName}/>
                <br/>

                <label htmlFor="lastName">Last Name</label>
                <input type="text"
                       name="lastName"
                       className="form-control"
                       placeholder="Last Name"
                       ref="lastName"
                       onChange={this.props.onChange}
                       value={this.props.author.lastName}/>
                <br/>
                <input type="submit" value="Save" className="btn btn-default" />
            </form>
        );
    }
});
*/
