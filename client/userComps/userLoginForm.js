var	React = require('react');

function UserLoginForm(props) {
        return (
            <div className="jumbotron">
							<div className="container">
								<form onSubmit={ props.submitUserToServer } action="/login" method="POST" role="form">
										<legend>Log In</legend>
									
										<div className="form-group">
											<label>email</label>
											<input onChange={ props.onEmailChange } name="email" type="email" className="form-control" id="" placeholder="Input field" />
										</div>

										<div className="form-group">
											<label>password</label>
											<input onChange={ props.onPasswordChange } name="password" type="password" className="form-control" id="" placeholder="Input field" />
										</div>
									
										
									
										<button type="submit" className="btn btn-primary">Log In</button>
									</form>
							</div>
						</div>
            )
};

module.exports = UserLoginForm;