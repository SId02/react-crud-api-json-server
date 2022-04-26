import React from "react";

const Contact = () => {
	return (
		<>
		<div className="columns is-desktop is-centered	p-6">
    <div className="column is-half">
        <div className="container">
            <form className="box">
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" type="email" placeholder="e.g. alex@example.com"/>
                  </div>
                </div>
              
                <div className="field">
                  <label className="label">Comments</label>
                  <div className="control">
						<textarea className="input" type="password" placeholder="Your comment	300	words"	maxLength="300">
						</textarea>
                  </div>
                </div>
               
                 
              
                <button className="button is-primary">Comment</button>
              </form>
        </div>
    </div>
  </div>









			
		</>
	);
};

export default Contact;
