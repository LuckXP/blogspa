var React = require('react');

var links = ['welcome', 'blog']

var LogIn = React.createClass({

  render: function() {
    var self = this;
    return (
      <div>
        <li className="nav-item pull-xs-right">
          <button onClick= { self.props.setActiveComponent.bind(null,'signUp' )} className="nav-link btn btn-success-outline" type="button" data-dismiss="modal">Sign Up</button>
        </li>
        <li className="nav-item pull-xs-right">
          <button onClick= { self.props.setActiveComponent.bind(null,'login' )} className="nav-link btn btn-success-outline" ttype="button" data-dismiss="modal">Login</button>
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
          <button onClick= {self.context.logOut} className="nav-link btn btn-success-outline" type="button" data-dismiss="modal">log out</button>
        </li>
        <li className="nav-item pull-xs-right marg-right">
          <h7 className="nav-link m-t-.8"> Logged in as: {self.props.userDispaly}   </h7>
        </li>
      </div>
    )
  }
});

var Modal = React.createClass({
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
              <a className="nav-link" data-dismiss="modal"
                 onClick={ self.props.setActiveComponent.bind(null, aLink)}>{ aLink } <span className="sr-only">(current)</span></a>
            </li>
          )
        } else {
          return (
            <li className="nav-item" key={aLink}>
              <a className="nav-link" data-dismiss="modal"
                 onClick={ self.props.setActiveComponent.bind(null, aLink)}>{ aLink }</a>
            </li>
          )
        }
      });
    return (
      <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog my-modal" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div className="modal-body">
              { linkList }
              {logButtons}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Modal;