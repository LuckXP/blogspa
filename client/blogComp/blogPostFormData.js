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
	propTypes: {
		toggleActiveComp: React.PropTypes.func.isRequired
	},

	getInitialState: function(){
		return {
			author: null,
			title: null,
			postBody: null,
			postDate: null
		}
	},


	handleAuthorChange: function(e){
		this.setState({ author: e.target.value })
	},

	handleTitleChange: function(e){
		this.setState({ title: e.target.value })
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
		blog.author = this.state.author.trim();
		blog.title = this.state.title.trim();
		blog.postBody = this.state.postBody.trim();
		blog.postDate = this.state.postDate.trim();

		console.log(blogPost);

		this.handleNewBlogPost(blogPost);
		this.setState({ author: '', title: '', postBody: '', postDate: ''})

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
				handleAuthorChange={ this.handleAuthorChange }
				handleTitleChange={ this.handleTitleChange }
				handlePostBodyChange={ this.handlePostBodyChange }
				handlePostDateChange={ this.handlePostDateChange } />
			</div>
			)
	}
});

module.exports = BlogPostFormData;