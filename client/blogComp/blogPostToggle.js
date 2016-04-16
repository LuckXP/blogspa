var React = require('react');

var BlogButton = React.createClass({
	render: function () {
		var self = this;
		return (
			<div className="col-sm-1 col-sm-offset-11 col-xs-1 col-xs-offset-9">
				<button type="button" className="btn btn-secondary clear-button btn-lg"
								onClick={ self.props.toggleActiveComp.bind(null, 'blogList') }>Blog</button>
			</div>

		)
	}


});

var PostButton = React.createClass({
	render: function () {
		var self = this;
		return (
			<div className="col-sm-1 col-sm-offset-11 col-xs-1 col-xs-offset-9">
				<button type="button" className="btn btn-secondary clear-button btn-lg"
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