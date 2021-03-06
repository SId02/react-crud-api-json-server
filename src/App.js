import React from "react";
import "../node_modules/bulma/css/bulma.css";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import	Footer from "./components/layout/Footer"
import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter,
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

function App(props) {
	return (
		<Router>
			<div className="App">
				<Navbar />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/users/add" component={AddUser} />
					<Route exact path="/users/edit/:id" component={EditUser} />
					<Route exact path="/users/:id" component={User} />
					<Route component={NotFound} />
				</Switch>
				<Footer/>
			</div>
		</Router>
	);
}

export default App;
