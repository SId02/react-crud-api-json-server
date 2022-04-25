import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container">
//         <Link className="navbar-brand" href="/">
//           Recat User
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/about">
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/contact">
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         <Link className="btn btn-outline-light" to="/users/add">
       
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
//   <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
//   <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
// </svg>
//           Add User</Link>
//       </div>
//     </nav>


    
    
    
    
    
<nav className="navbar  has-background-grey-light has-text-white" role="navigation" aria-label="main navigation">
<div className="navbar-brand">
<Link className="navbar-item" href="/">
          Recat User
        </Link>

  <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
</div>

<div id="navbarBasicExample" className="navbar-menu">
  <div className="navbar-end">
    <p className="navbar-item">
    <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
    </p>

    <p class="navbar-item">
    <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
    </p>
    <p class="navbar-item">
    <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
      </p>
  </div>

  <div className="navbar-end">
    <div className="navbar-item">
      <div className="buttons">
       
        <Link className="button has-background-success has-text-dark" to="/users/add">
            <span className="icon">
                <i className="far fa-plus-square"></i>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
         <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
         <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
       </svg>
              </span>
              <span>ADD User </span>
        
        </Link>
            













      </div>
    </div>
  </div>
</div>
</nav>
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
  );
};

export default Navbar;


