var React = require('react');


var BlogPostToggle = React.createClass({
	render: function(){
		return (
		<div>	
			<section className="container col-xs-11 display">
					<a className="black" 
					onClick={ this.props.toggleActiveComp.bind(null, 'blogList') }>
					<h1>Blog List</h1></a>
		
					<a className="black" 
					onClick={ this.props.toggleActiveComp.bind(null, 'blogPostForm') }>
					<h1>Post a Blog</h1></a>
		
			</section>
				
		</div>	
			)
	}

});

module.exports = BlogPostToggle;