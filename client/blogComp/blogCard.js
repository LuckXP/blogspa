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

var ReactMarkdown = require('react-markdown');

function BlogCard(props){
	console.log('this is blog card prop', props)
  return (

    <div className="card">
      <img className="card-img-top" alt="Card image cap" />
      <div className="card-block">
        <h4 className="card-title">{props.postDate}</h4>
        <ReactMarkdown source={props.postBody}/>
        <a href="#" onClick={ props.getId.bind(null,'showOneBlog', props.id) } className="btn btn-primary">view</a>
      </div>
    </div>
    )

};

module.exports = BlogCard;