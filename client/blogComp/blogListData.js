/* BlogApp
	Navbar
	Footer
	Blog
	  BlogPostToggle		
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
var BlogList = require('./blogList');

var BlogListData = React.createClass({
	getInitialState: function(){
		return {
			blogArray: []
		}
	},

	loadBlogsFromServer: function(){
		var self = this;
		$.ajax({
			url: '/api/blogposts',
			method: 'GET'
		}).done(function(data){
			console.log('loaded blogs from server:', data);
			self.setState({ blogArray: data })
		})
	},

	componentDidMount: function(){
		this.loadBlogsFromServer();
	},
	render: function(){
		return this.state.blogArray ? <BlogList blogArray={ this.state.blogArray } getId={ this.props.getId } /> : null;
	}
});

module.exports = BlogListData;