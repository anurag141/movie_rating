import axios from 'axios';
import React, { useState } from 'react';
import './Login.css';

export default function Login({ onLoginSuccess, setShowSignUpPage }) {

	async function onSubmitHandler(event) {
		event.preventDefault();
		const response = await axios.post("http://localhost:9000/login", user);
		const token = response.data.token;
        localStorage.setItem("token", token);
        onLoginSuccess();
	}
	const [user, setUser] = useState({
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
		<div className="Login box">
			<form className="form" onSubmit={onSubmitHandler}>
				<h2>Welcome Back!!</h2>
				<div className="inputBox">
					<span>Email</span>
					<input name="email" type="email" value={user.email} onChange={handleChange} required="required" />
					<i></i>
				</div>
				<div className="inputBox">
					<span>Password</span>
					<input name="password" type="password" value={user.password} onChange={handleChange} required="required" />
					<i></i>
				</div>
				<div className="links">
					<button name="LoginSubmitButton" type="submit">Log In</button>
					<button onClick={() => setShowSignUpPage(true)}>Sign Up</button>
				</div>
			</form>
		</div>
	)
}



