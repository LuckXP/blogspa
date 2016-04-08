var React = require('react');

var links = ['welcome', 'blog']

var LogIn = React.createClass({
    
    render: function() {
			var self = this;
			return (
						    <div>
						    <button onClick= { self.props.setActiveComponent.bind(null,'signUp' )} className="btn btn-success-outline" type="submit">Sign Up</button>
						    <button onClick= { self.props.setActiveComponent.bind(null,'login' )} className="btn btn-success-outline" type="submit">Login</button>
								</div>
							)
		}
});

var LogOut = React.createClass({     
    contextTypes: {
        logOut: React.PropTypes.func.isRequired
    },
    render: function() {
    	var self = this;
			return (  <button onClick= {self.context.logOut} className="btn btn-success-outline" type="submit">log out</button> )
		}
});


var NavBar = React.createClass({
   contextTypes: {
        user: React.PropTypes.object
    },
    render: function() {
    	var self = this;
      var logButtons;
      var user = self.context.user;
      console.log(user);
      if (user == null) {
      	logButtons = <LogIn setActiveComponent= { self.props.setActiveComponent } />;
      } else {
      	logButtons = <LogOut setActiveComponent= { self.props.setActiveComponent } />;
      }
      
      var link = links.map(function(alink) {
	    	return (
	    		<li className="nav-item active" key={alink}>
				    <a className="nav-link" 
				    onClick={ self.props.setActiveComponent.bind(null, alink)}>{ alink } <span className="sr-only">(current)</span></a>
					</li>
	    		)
    		});
      return (
			 <nav className="navbar navbar-dark bg-inverse">
			  <a className="navbar-brand" href="#">nothing</a>
			  <ul className="nav navbar-nav">
			    
			  { link }
			  { logButtons }

			  </ul>
			</nav>
      )
    }

});

module.exports = NavBar;