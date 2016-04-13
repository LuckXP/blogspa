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
var BlogCard = require('./blogCard');

function BlogList(props){

	var blogs = props.blogArray.map(function(item){
		return <BlogCard
				getId={ props.getId }
				id={ item._id }
				key={ item._id } 
				author={ item.author } 
				title={ item.title } 
				content={ item.content }
				date={ item.date } />
	})
		return (
			<div className="container">
				{ blogs }
			</div>
			)
	};

module.exports = BlogList;