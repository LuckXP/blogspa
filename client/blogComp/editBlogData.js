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

*/

var React = require('react');
var EditBlogForm = require('./editBlogForm');


var EditBlogData = React.createClass({
	

	getInitialState: function(){
		return {
			author: null, 
			title: null, 
			content: null, 
			date: null, 
		}
	},

	loadSingleBlogFromServer: function(){
		var self = this;
		$.ajax({
			url: '/api/blogPost/' + this.props.id,
			method: 'GET'
		}).done(function(data){
			self.setState({
				author: data.author,
				title: data.title,
				content: data.content,
				date: data.date
			})
		});
	},

	updateBlogForm: function(blog){
		$.ajax({
			url: '/api/blogPost/' + this.props.id,
			dataType: 'json',
			type: 'PUT',
			data: blog,
			success: function(data){
				this.loadSingleBlogFromServer();
				this.props.toggleActiveComp('oneBlog');
			}.bind(this),
			error: function(xhr, status, err){
				console.error(status, err.toString());
			}.bind(this)
		});
	},



	handleEditBlogSubmit: function(e){
		e.preventDefault();

		var author = this.state.author.trim();
		var title = this.state.title.trim();
		var content = this.state.content.trim();
		var date = this.state.date.trim();

		this.updateBlogForm({ author: author, title: title, content: content, date: date})
	},

	onAuthorChange: function(e){
		this.setState({ author: e.target.value })
	},

	onTitleChange: function(e){
		this.setState({ title: e.target.value })
	},

	onContentChange: function(e){
		this.setState({ content: e.target.value })
	},

	onDateChange: function(e){
		this.setState({ date: e.target.value })
	},

	componentDidMount: function(){
		this.loadSingleBlogFromServer();
	},

	render: function(){
		return (
			<div>
				<EditBlogForm 
				author={ this.state.author } 
				title={ this.state.title } 
				content={this.state.content} 
				date={this.state.date}
				onAuthorChange={this.onAuthorChange}
				onTitleChange={this.onTitleChange}
				onContentChange={this.onContentChange}
				onDateChange={this.onDateChange}
				handleEditBlogSubmit={this.handleEditBlogSubmit}
				/>
			</div>
			)
	}
});

module.exports = EditBlogData;