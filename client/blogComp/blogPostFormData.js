/* BlogApp
	Navbar
	Footer
	Blog
	  BlogListData
		BlogList(Stateless)
			BlogCard(Stateless)
	  BlogPostFormData
	  	BlogPostForm		

*/

var React = require('react');
var BlogPostForm = require('./blogPostForm');

var BlogPostFormData = React.createClass({
	contextTypes: {
    user: React.PropTypes.object
  },

	propTypes: {
		toggleActiveComp: React.PropTypes.func.isRequired
	},

	getInitialState: function(){
		return {
			postBody: null
		}
	},

	handlePostBodyChange: function(e){
		this.setState({ postBody: e.target.value })
	},

	handlePostDateChange: function(e){
		this.setState({ postDate: e.target.value })
	},

	handleBlogSubmit: function(e){
		e.preventDefault();

		var blogPost = {};
		blogPost.author = this.context.user;
		blogPost.postBody = this.state.postBody.trim();

		console.log(blogPost);

		this.handleNewBlogPost(blogPost);
		this.setState({ postBody: '' })

	},

	handleNewBlogPost: function(blogPost){
		$.ajax({
			url: '/api/blogposts',
			type: 'POST',
			data: blogPost,
			success: function(data){
				this.props.toggleActiveComp('blogList');
				console.log(data);
			}.bind(this),
			error: function(xhr, status, err){
				console.error('/api/blogposts', status, err.toString())
			}.bind(this)
		})
	},


	render: function(){
		return (
			<div>
				<BlogPostForm handleBlogSubmit={ this.handleBlogSubmit }
				handlePostBodyChange={ this.handlePostBodyChange } />
			</div>
			)
	}
});

module.exports = BlogPostFormData;