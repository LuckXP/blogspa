var React = require('react');

var Welcome = React.createClass({
    render: function() {
        return (
			<div className="jumbotron">
			  <h1 className="display-3">😭welcome to nothing😭</h1>
			  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			  <hr className="m-y-2" />
			  <p>this is my little spot on the net. I'm a cyclist and web developer based in Montana. I use this as a space to keep track of my adventures in code(read: blog) and experiment with cool cool tech.
				So far, this site has been built purely with Reactjs and Bootstrap with some light css styling using Sass. If you feel like checking out any of the code, hit my gitHub. </p>
			  <p className="lead">
			    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			  </p>
			</div>
            )
    }

});

module.exports = Welcome;