var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar');
var Notifier = require('./notifier');
var Welcome = require('./welcome');
var UserApp = require('./userApp');
var UserAuth = require('./userAuth');
var Blog = require('./blogComp/blog.js');
var BlogList = require('./blogComp/blogList.js');

require('./stylesheets/main.scss');


var App = React.createClass({
  getInitialState: function() {
  	return {
  		activeComponent: 'welcome'
  	}
  },
  setActiveComponent: function(componentName) {
  	this.setState({
  		activeComponent: componentName
  	})
  },

  getActiveComponent: function() {
    return this.state.activeComponent;
  },

  showWhichComponent: function() {
   switch(this.state.activeComponent) {
    case 'welcome':
        return <Welcome />
        break;
    case 'blog':
        return <Blog />
        break;
    case 'login':
        return <UserApp login={ true } setActiveComponent={this.setActiveComponent} />
        break;
    case 'signUp':
        return <UserApp login={ false } setActiveComponent={this.setActiveComponent} />
        break;
    case 'blogList':
        return <BlogList />
        break;
    default:
       return <Welcome />
    }
  },
  render: function() {
    return (
      <div>
        <Notifier>
          <UserAuth>  
            <div>
              <NavBar setActiveComponent={ this.setActiveComponent } getActiveComponent= { this.getActiveComponent } />
              {this.showWhichComponent()}
            </div>
          </UserAuth> 
        </Notifier> 
      </div>
      )
  }
})

ReactDOM.render(
  <App />, document.getElementById('app')
);