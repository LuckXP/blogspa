var React = require('react');

var links = ['welcome', 'blog']

var LogIn = React.createClass({
    
    render: function() {
			var self = this;
			return (
		    <div>
			    <li className="nav-item pull-xs-right">
			    	<button onClick= { self.props.setActiveComponent.bind(null,'signUp' )} className="nav-link btn btn-success-outline" type="submit">Sign Up</button>
			    </li>
			    <li className="nav-item pull-xs-right">
		    		<button onClick= { self.props.setActiveComponent.bind(null,'login' )} className="nav-link btn btn-success-outline" type="submit">Login</button>
					</li>
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
			return (  
				<div>
					<li className="nav-item pull-xs-right">
						<button onClick= {self.context.logOut} className="nav-link btn btn-success-outline" type="submit">log out</button> 
					</li>
					<li className="nav-item pull-xs-right marg-right">
						<h7 className="nav-link m-t-.8"> Logged in as: {self.props.userDispaly}   </h7>
					</li>
				</div>
			)
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
    var userDispaly = null;
    if (user == null) {
      logButtons = <LogIn setActiveComponent= { self.props.setActiveComponent } />;
    } else {
      userDispaly = user.local.username;
      console.log('this is the logged in users username: ', userDispaly);
      logButtons = <LogOut setActiveComponent= { self.props.setActiveComponent } userDispaly={userDispaly} />;
    };

    var currentComponent = self.props.getActiveComponent;
    var linkList =
      links.map(function(aLink) {
        if(currentComponent() === aLink) {
          return (
            <li className="nav-item active" key={aLink}>
              <a className="nav-link"
              onClick={ self.props.setActiveComponent.bind(null, aLink)}>{ aLink } <span className="sr-only">(current)</span></a>
            </li>
            )
        } else {
          return (
            <li className="nav-item" key={aLink}>
              <a className="nav-link"
              onClick={ self.props.setActiveComponent.bind(null, aLink)}>{ aLink }</a>
            </li>
            )
        }
      });
    return (

      <nav className="col-xs-6 col-sm-offset-1 col-sm-10 navbar navbar-dark navbar-fixed-top bg-inverse myNavbar">
        <a className="navbar-brand" href="#">jesse's</a>
        <ul className="nav navbar-nav hidden-xs-down">

        { linkList }
        { logButtons }

        </ul>
        <ul className="nav navbar-nav hidden-sm-up">
          <li>
            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
              menu
            </button>


            
          </li>
        </ul>
      </nav>

    )
  }

});

module.exports = NavBar;