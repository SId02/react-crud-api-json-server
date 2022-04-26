import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <>

  <div className="container pt-6">
    <div className="columns is-desktop is-centered">
        <div className="column is-half">
        <h1 className="is-centered">Edit A User</h1>
        <div className="container">
            <form className="box" onSubmit={e => onSubmit(e)}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                  <input className="input"
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    value={ name }
                     onChange={e => onInputChange(e)}
                  
                  />
                  </div>
                </div>
              
                <div className="field">
                  <label className="label">UserName</label>
                  <div className="control">
                  <input className="input"
                    type="text"
                    placeholder="Enter your username"
                          
                    value={ username }
                    name="username" 
                     onChange={e => onInputChange(e)}
                  />
                  </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                  <input className="input" type="email" placeholder="Enter your email address"
                    value={ email }
                    name="email"
                   onChange={e => onInputChange(e)}
                  />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Phone</label>
                    <div className="control">
                  <input className="input" type="text" placeholder="Enter phone number"
                   name="phone"
                   value={phone}
                   onChange={e => onInputChange(e)}
                  />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Website</label>
                    <div className="control">
                  <input className="input" type="text" 
                     placeholder="Enter Your Website URL"
                     name="website"
                     value={website}
                     onChange={e => onInputChange(e)}
                  />
                    </div>
                  </div>
              
              <button className="button is-primary">Update User</button>
              </form>
        </div>
    </div>
  </div>
      
      </div>



  </>
  );
};

export default EditUser;
