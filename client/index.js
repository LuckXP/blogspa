var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar');
var Notifier = require('./notifier');
var Welcome = require('./welcome');
var UserApp = require('./userApp');




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
  showWhichComponent: function() {
   switch(this.state.activeComponent) {
    case 'welcome':
        return <Welcome />
        break;
    case 'blog':
        return <BlogApp />
        break;
    case 'login':
        return <UserApp login={ true } setActiveComponent={this.setActiveComponent} />
        break;
    case 'signUp':
        return <UserApp login={ false } setActiveComponent={this.setActiveComponent} />
        break;
    default:
       return <Welcome />
    }
  },
  render: function() {
    return (
      <div>
        <Notifier>
          <NavBar setActiveComponent={ this.setActiveComponent } />
          
          {this.showWhichComponent()}
           
        	
        </Notifier>
      </div>
      )
  }
})

ReactDOM.render(
  <App />, document.getElementById('app')
);