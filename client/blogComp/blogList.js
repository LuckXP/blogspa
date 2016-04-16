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
	console.log('props in blogList', props)
	var blogs = props.blogArray.map(function(item){
		return <BlogCard
				getId={ props.getId }
				id={ item._id }
				key={ item._id } 
				author={ item.author }
				postBody={ item.postBody }
				postDate={ item.postDate } />
	})
		return (
			<div>
				{ blogs }
			</div>
			)
	};

module.exports = BlogList;