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
var Markdown = require('react-markdown');


function BlogCard(props){
		var content = props.content.substr(0,450) + '...';
		return (
		<div>
			<div className="container col-xs-8 col-xs-offset-2">
				<a onClick={ props.getId.bind(null,'showOneBlog', props.id) } className="black">
					<h1 className="divider"> { props.title } </h1>
				</a>
				<p> Posted by <b>{ props.author }</b>, on <b>{ props.date }</b> </p>
				<Markdown source={ content }/> 				
			</div>
			
		</div>

			)
	};

module.exports = BlogCard;