var React = require('react');
var UserLoginFormData = require('./userComps/userLoginFormData');

var UserApp = React.createClass({
    render: function() {
        return (
            <div>
            	<UserLoginFormData setActiveComponent={this.props.setActiveComponent} />
            </div>
            )
    }

});

module.exports = UserApp;