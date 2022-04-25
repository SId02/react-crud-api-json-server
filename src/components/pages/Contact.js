import React from "react";

const Contact = () => {
	return (
		<>
			<div className="columns is-mobile is-centered	m-auto	p-auto">
  <div className="column is-half">
  <div className="container">
				<form className="box">
					<div className="field">
						<label className="label">Email</label>
						<div className="control">
							<input
								className="input"
								type="email"
								placeholder="e.g. alex@example.com"
							/>
						</div>
					</div>

					<div className="field">
						<label className="label">Password</label>
						<div className="control">
							<input className="input" type="password" placeholder="********" />
						</div>
					</div>

					<button className="button is-primary">Sign in</button>
				</form>
			</div>
  </div>
</div>









			
		</>
	);
};

export default Contact;
