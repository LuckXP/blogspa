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
    submitUserToServer: function(e) {
    	e.preventDefault();

    	var userData = {
	    	email: this.state.email.trim(),
				password: this.state.password.trim()
	   	};
    	var self = this;
    	$.ajax({
    		url: '/login' ,
    		method: 'POST',
    		data: userData
    	}).done( function(data) {
    		console.log(data);
    		self.props.setActiveComponent('welcome');
        self.context.sendNotification("you logged in!");
			}).fail(function(data) {
				console.log(data);
				self.context.sendNotification("log in failed: " + data.responseText);
			})
    },
    render: function() {
        return (
        	<UserLoginForm 
           submitUserToServer = { this.submitUserToServer }
        	 onEmailChange = { this.onEmailChange }
        	 onPasswordChange = { this.onPasswordChange } />
        )
    }

});

module.exports = UserLoginFormData;