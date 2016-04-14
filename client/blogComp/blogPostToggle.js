var React = require('react');


var BlogPostToggle = React.createClass({
	render: function(){
		return (
		<div className="container m-a-1">
			<div className="container">
					<button type="button" className="btn btn-secondary"
					onClick={ this.props.toggleActiveComp.bind(null, 'blogList') }>
					Blog List</button>
		
					<button type="button" className="btn btn-secondary"
					onClick={ this.props.toggleActiveComp.bind(null, 'blogPostForm') }>
					Post a Blog</button>
		
			</div>
				
		</div>	
			)
	}

});

module.exports = BlogPostToggle;