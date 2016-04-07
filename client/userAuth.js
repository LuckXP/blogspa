var React = require('react');

var UserAuth = React.createClass({
    getInitialState: function() {
    	return {
    		user: null
    	}
    },
    propTypes: {
    	children: React.PropTypes.node.isRequired
    },
    childContextTypes: {
    	getUser: React.PropTypes.func
    },
    getChildContext: function() {
    	return {
    			getUser: this.getUser
    		}
    },
    getUser: function(message) {
    	var self = this;
    	$.ajax({
    		url: '/getUser',
    		method: 'GET'
    	}).done(function(data) {
    		console.log(data);
    	})
    },
    render: function() {
        return (
            <div>
	            { this.props.children }
		    		</div>
            )
    }

});

module.exports = UserAuth;