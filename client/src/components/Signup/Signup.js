import axios from 'axios';
import React, { useState } from 'react';
import './Signup.css';


export default function Signup({ onSignupSuccess, setShowSignUpPage }) {

	async function onSubmitHandler(event) {
		event.preventDefault();
		const response = await axios.post("http://localhost:9000/signup", user);
		const token = response.data.token;
		localStorage.setItem("token", token);
		onSignupSuccess();
	}
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: ''
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user, [name]: value
		});
	}
	return (
		<div className="Signup box">
			<form className="form" onSubmit={onSubmitHandler}>
				<h2>Welcome!!!</h2>
				<div className="inputBox">
					<span>Name</span>
					<input type="text" id="name" name="name" placeholder="Name" value={user.name} onChange={handleChange} />
					<i></i>
				</div>
				<div className="inputBox">
					<span>Email</span>
					<input name="email" type="email" id="email" placeholder="Email" value={user.email} onChange={handleChange} required="required" />
					<i></i>
				</div>
				<div className="inputBox">
					<span>Password</span>
					<input name="password" type="password" id="password" placeholder="Password" value={user.password} onChange={handleChange} required="required" />
					<i></i>
				</div>
				<div className="links">
					<button name="SignupSubmitButton" type="submit">Sign Up</button>
					<button onClick={() => setShowSignUpPage(false)}>Log In</button>
				</div>
			</form>
		</div>
	)
}



