/* BlogApp
	Navbar
	Footer
	Blog
	  BlogListData
		BlogList(Stateless)
			BlogCard(Stateless)
	  BlogPostFormData
	  	BlogPostForm
	  EditBlogData
	  	EditBlogForm	
	  SingleBlogDetailData
	  	SingleBlogDetail
	  		CommentList
			CommentPostData
				CommentPostForm

*/

var React = require('react');
var CommentPostForm = require('./commentPostForm');

var CommentPostData = React.createClass({
	getInitialState: function(){
		return {
			body: null
		}
	},

	handleBodyChange: function(e){
		this.setState({ body: e.target.value })
	},

	handleNewCommentPost: function(comment){
		$.ajax({
			url: '/api/blogPost/' + this.props.id +'/comment',
			type: 'POST',
			data: comment,
			success: function(data){
				this.props.loadCommentsFromServer();
				this.props.loadOneBlogFromServer();
				console.log(data)
			}.bind(this),
			error: function(xhr, status, err){
				alert('Please sign up to leave comments.');
				console.error('/api/blogPost/' + this.props.id +'/comment', status, err.toString())
			}.bind(this)
		})
	},

	handleCommentSubmit: function(e){
		e.preventDefault();

		var comment = {};
		comment.body = this.state.body.trim();

		if(!comment.body){
			return;
		} else {
			this.handleNewCommentPost(comment);
			this.setState({ body: ''});
		}
	},


	render: function(){
		return (
			<div>
				<CommentPostForm handleBodyChange={ this.handleBodyChange }
				handleCommentSubmit={ this.handleCommentSubmit }
				body={ this.state.body } />
			</div>
			)
	}
});

module.exports = CommentPostData;