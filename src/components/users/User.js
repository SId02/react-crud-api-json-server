import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
	const [user, setUser] = useState({
		name: "",
		username: "",
		email: "",
		phone: "",
		webiste: "",
	});
	const { id } = useParams();
	useEffect(() => {
		loadUser();
	}, []);
	const loadUser = async () => {
		const res = await axios.get(`http://localhost:3003/users/${id}`);
		setUser(res.data);
	};
	return (
		<>
			<section className="section">
				<div className="container py-4">
					<Link className="button is-primary" to="/">
						Back to Home
					</Link>
					<h2 className="title has-text-centered mb-6">User Id: {id}</h2>
					<div className="columns is-centered">
						<div className="column is-half  box">
							<div>
								<div className="media">
									<div className="media-left">NAME : </div>
									<div className="media-content">
										<div className="content">
											<p> {user.name}</p>
										</div>
									</div>
								</div>
								<div className="media">
									<div className="media-left">USER NAME :</div>
									<div className="media-content">
										<div className="content">
											<p> {user.username}</p>
										</div>
									</div>
								</div>
								<div className="media">
									<div className="media-left">EMAIL :</div>
									<div className="media-content">
										<div className="content">
											<p> {user.email}</p>
										</div>
									</div>
								</div>
								<div className="media">
									<div className="media-left">PHONE :</div>
									<div className="media-content">
										<div className="content">
											<p> {user.phone}</p>
										</div>
									</div>
								</div>
								<div className="media">
									<div className="media-left">WEBSITE:</div>
									<div className="media-content">
										<div className="content">
											<p> {user.website}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default User;
