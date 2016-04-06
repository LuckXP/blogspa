var React = require('react');

var links = ['welcome', 'blog']



var NavBar = React.createClass({
    
    render: function() {
        var self = this;
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
			  <li className="form-inline pull-xs-right">
					    <button className="btn btn-success-outline" type="submit">Sign Up</button>
					    <button onClick= { self.props.setActiveComponent.bind(null,'login' )} className="btn btn-success-outline" type="submit">Login</button>
				</li> 
			  </ul>
			</nav>
            )
    }

});

module.exports = NavBar;