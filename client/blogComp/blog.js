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
var BlogListData = require('./blogListData');
var BlogPostFormData = require('./blogPostFormData');
var BlogPostToggle = require('./blogPostToggle');
var SingleBlogDetailData = require('./singleBlogDetailData');
var EditBlogData = require('./editBlogData');


var Blog = React.createClass({
	getInitialState: function(){
		return {
			activeComponent: 'blogList',
			activeBlogId: null,
		}
	},

	getId: function(whichComp, id){
		console.log(id);
		if(whichComp === 'showOneBlog'){
			return this.setState({ activeBlogId: id, activeComponent: 'oneBlog' })
		} else if(whichComp === 'editOneBlog'){
			return this.setState({ activeBlogId: id, activeComponent: 'editBlog' })
		} else {
			return null
		}
	},

	showComponent: function(){
		if(this.state.activeComponent === 'blogList'){
			return <BlogListData getId={ this.getId }/>
		} else if(this.state.activeComponent === 'blogPostForm'){
			return <BlogPostFormData toggleActiveComp={ this.toggleActiveComp }/>
		} else if(this.state.activeComponent === 'oneBlog'){
			return <SingleBlogDetailData id={ this.state.activeBlogId } getId={ this.getId } toggleActiveComp={ this.toggleActiveComp }/>	
		} else if(this.state.activeComponent === 'editBlog'){
			return <EditBlogData id={ this.state.activeBlogId } toggleActiveComp={ this.toggleActiveComp }/>
		} else {
			throw new Error('No active Component', this.state.activeComponent);
		}
	},

	toggleActiveComp: function(name){
		this.setState({activeComponent: name})
	},
	
	getActiveComp: function() {
		return this.state.activeComponent;
	},

	render: function(){
		return (
			<div>
			<BlogPostToggle toggleActiveComp={ this.toggleActiveComp } getActiveComp={ this.getActiveComp } />
			{ this.showComponent() }
			<br/>
			</div>
			)
	}
});

module.exports = Blog;