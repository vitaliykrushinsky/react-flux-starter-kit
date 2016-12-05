"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    statics: {
        willTransitionFrom: function (transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },
    getInitialState: function () {
        // set initial state
        return {
            author: { id: '', firstName: '', lastName: '' },
            errors: {},
            dirty: false
        };
    },
    // this function manage the path '/author:id to edit existing author
    componentWillMount: function () {
        var authorId = this.props.params.id; // from the path '/author:id
        if (authorId) {
            this.setState({author: AuthorApi.getAuthorById(authorId)});
        }
    },
    setAuthorState: function (event) {
        // set state that input field is dirty
        this.setState({dirty: true});

        // save data
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;

        // update State, that data user type
        return this.setState({author: this.state.author});
    },
    authorFormValid: function () {
        var formIsValid = true;
        this.state.errors = {}; // clear any previous errors

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First name must be at least 3 characters.';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },
    saveAuthor: function (event) {
        event.preventDefault();

        if (!this.authorFormValid()) {
            return;
        }

        AuthorApi.saveAuthor(this.state.author);

        // set state that input field saved and no more dirty
        this.setState({dirty: false});

        // notification from library toastr
        toastr.success('Author saved.');
        // transition to authors route after click save button
        this.transitionTo('authors');
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-offset-3 col-sm-6">
                    {/* pass author initial state and setAuthorState change handler down to child component */}
                    <AuthorForm
                        author={this.state.author}
                        onChange={this.setAuthorState}
                        onSave={this.saveAuthor}
                        errors={this.state.errors}/>
                </div>
            </div>
        );
    }
});

module.exports = ManageAuthorPage;
