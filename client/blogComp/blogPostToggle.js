var React = require('react');

var BlogButton = React.createClass({
	render: function () {
		var self = this;
		return (
			<div className="container m-b-1">
				<button type="button" className="btn btn-secondary"
								onClick={ self.props.toggleActiveComp.bind(null, 'blogList') }>Blog</button>
			</div>

		)
	}


});

var PostButton = React.createClass({
	render: function () {
		var self = this;
		return (
			<div className="container m-b-1">
				<button type="button" className="btn btn-secondary"
								onClick={ self.props.toggleActiveComp.bind(null, 'blogPostForm') }>Post</button>
			</div>

		)
	}
});

var BlogPostToggle = React.createClass({
	render: function() {
		var self = this;
		var currentComp = self.props.getActiveComp;
		var correctButton = null;
		console.log(self.props.getActiveComp());

		if (currentComp() === 'blogList') {
			correctButton = <PostButton toggleActiveComp={ self.props.toggleActiveComp }/>;
		} else {
			correctButton = <BlogButton toggleActiveComp={ self.props.toggleActiveComp }/>;
		}
		;

		return (
			<div>
				{correctButton}
			</div>
		)
	}

});

module.exports = BlogPostToggle;