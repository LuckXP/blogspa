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
var CommentList = require('./commentList');
var CommentPostData = require('./commentPostData');
var Markdown = require('react-markdown');

var SingleBlogDetail = React.createClass({
	propTypes: {
		toggleActiveComp: React.PropTypes.func.isRequired
	},

	loadAllBlogsFromServer: function(){
		var self = this;
		$.ajax({
			url: '/api/blogPost',
			method: 'GET'
		}).done(function(data){
			self.setState({ blogArray: data })
		})
	},

	deleteBlogPost: function(){
		if(confirm("Are you sure you want to delete?")){
		var self = this;
		$.ajax({
			url: '/api/blogPost/' + this.props.id,
			method: 'DELETE'
		}).done(function(){
			self.loadAllBlogsFromServer();
			self.props.toggleActiveComp('blogList');
		})
	   }
	},

	componentDidMount: function(){
		this.loadAllBlogsFromServer();
	},

	render: function(){
	return (
		<div>
			<button className="btn btn-default" onClick={ this.deleteBlogPost.bind(null, this.props.id) }>Delete Blog</button>	
			<div className="container col-xs-10 col-xs-offset-1">
				<h1 className="divider"> { this.props.oneBlog.title } </h1>
					<p> Posted by <b>{ this.props.oneBlog.author }</b>, on <b>{ this.props.oneBlog.date }</b> </p>
					 <div className="col-xs-offset-12">
						<a className="btn btn-default btn-sm edit-button pencil" 
						onClick={ this.props.getId.bind(null,'editOneBlog', this.props.id) }>
						<span className="glyphicon glyphicon-pencil pencil"></span>
						</a>
			</div>
					 <Markdown source={ this.props.oneBlog.content } /> 
					<br/><br/>
					<CommentList commentArray={ this.props.commentArray }/>
					<br/><br/>
			</div>
					<CommentPostData id={ this.props.id } 
					loadOneBlogFromServer={ this.props.loadOneBlogFromServer }
					loadCommentsFromServer={ this.props.loadCommentsFromServer }/>
							
		</div>
		)
	}
});

module.exports = SingleBlogDetail;