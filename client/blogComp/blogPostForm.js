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

var BlogPostForm = React.createClass({
	render: function(){
		return(

				<div className="card card-block my-card">
					<form onSubmit={ this.props.handleBlogSubmit }>
						<h1 className="card-title">Post a Blog</h1>
						<br/>	
						 <fieldset className="form-group">
							<label for="formGroupExampleInput2">Content</label>
							<textarea type="text" className="form-control" onChange={ this.props.handlePostBodyChange }
							value={ this.props.postBody }
							id="formGroupExampleInput2" placeholder="Content"></textarea>
						</fieldset>
						<button className="btn btn-default" type="submit">Submit</button>
					</form>
			</div>

			)
	}
});

module.exports = BlogPostForm;