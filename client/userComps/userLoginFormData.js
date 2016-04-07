var React = require('react');

var UserLoginForm = require('./userLoginForm');


var UserLoginFormData = React.createClass({
    getInitialState: function() {
    	return {
    		email        : null,
            password     : null,
            username     : null,
    	}
    },
    contextTypes: {
        sendNotification: React.PropTypes.func.isRequired
    },
    onEmailChange: function(event) {
    	this.setState({ email: event.target.value })
    },
    onPasswordChange: function(event) {
    	this.setState({ password: event.target.value })
    },
    onUserNameChange: function(event) {
        this.setState({ username: event.target.value })
    },

    submitUserToServer: function(e) {
    	e.preventDefault();

    	var userData = {
	    	email: this.state.email.trim(),
			password: this.state.password.trim(),
            username: this.state.username ? this.state.username.trim() : null

	   	};
    	var self = this;
    	$.ajax({
    		url: self.props.login ? '/login' : '/signup' ,
    		method: 'POST',
    		data: userData
    	}).done( function(data) {
    		console.log(data);
    		self.props.setActiveComponent('welcome');
            self.context.sendNotification(self.props.login ? 'you logged in' : 'you signed up');
		}).fail(function(data) {
			console.log(data);
			self.context.sendNotification((self.props.login ? 'logged in failed: ' : 'sign up failed: ') + data.responseText);
		})
    },
    render: function() {
        return (
        	<UserLoginForm 
                login = {this.props.login}
                onUserNameChange = { this.onUserNameChange }
                submitUserToServer = { this.submitUserToServer }
            	onEmailChange = { this.onEmailChange }
            	onPasswordChange = { this.onPasswordChange } />
        )
    }

});

module.exports = UserLoginFormData;