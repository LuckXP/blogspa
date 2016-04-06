var React = require('react');




var UserSignUpFormData = React.createClass({
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
    	this.setState({ fishName: event.target.value })
    },
    onPasswordOneChange: function(event) {
    	this.setState({ fishColor: event.target.value })
    },
    onPasswordTwoChange: function(event) {
    	this.setState({ fishColor: event.target.value })
    },
    onUserNameChange: function(event) {
    	this.setState({ fishLength: event.target.value })
    },
    
    submitUserToServer: function(e) {
    	e.preventDefault();

    	var fishData = {
	    	email: this.state.email.trim(),
				password: this.state.password,
				username: this.state.username.trim(),
	   	};
    	var self = this;
    	$.ajax({
    		url: '/api/fish' ,
    		method: 'POST',
    		data: fishData
    	}).done( function() {
    		self.props.toggleActiveComp('fish');
            self.context.sendNotification("you added a fish");
		})
    },
    render: function() {
        return (
        	<FishForm 
             submitFishToServer = { this.submitFishToServer }
        	 onNameChange = { this.onNameChange }
        	 onColorChange = { this.onColorChange }
        	 onLengthChange = { this.onLengthChange }
        	 onImgChange = { this.onImgChange }
        	 peopleEaterChange = { this.peopleEaterChange } />
        )
    }

});

module.exports = FishFormData;
