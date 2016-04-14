var React = require('react');


var BlogPostToggle = React.createClass({
	render: function(){
		return (
		<div>	
			<div className="container">
					<button className="black"
					onClick={ this.props.toggleActiveComp.bind(null, 'blogList') }>
					Blog List</button>
		
					<button className="black"
					onClick={ this.props.toggleActiveComp.bind(null, 'blogPostForm') }>
					Post a Blog</button>
		
			</div>
				
		</div>	
			)
	}

});

module.exports = BlogPostToggle;