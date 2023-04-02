import React, { useState, useEffect } from 'react'

import MovieList from './components/MovieList/MovieList';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import './App.css';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showSignUpPage ,setShowSignUpPage] = useState(false);

    function postRenderHandler() {
        const token = localStorage.getItem('token');
        if (token){
            setLoggedIn(true);
        } 
    }
    function handleSuccessfulLogin() {
        setLoggedIn(true);
    }
    function onLogoutHandler() {
        localStorage.removeItem("token");
        setLoggedIn(false);
    }
    function displayPages() {
        if(loggedIn){
            return <MovieList />;
        } else if (showSignUpPage){
            return <Signup onSignupSuccess={handleSuccessfulLogin} setShowSignUpPage={ setShowSignUpPage } />;
        } else {
            return <Login onLoginSuccess={handleSuccessfulLogin} setShowSignUpPage={ setShowSignUpPage } />;
        }
    }

    useEffect(postRenderHandler, []);
	return (
		<div className="App">
            <Header onLogoutHandler={onLogoutHandler} loggedIn={ loggedIn } />
            { displayPages() }
		</div>
	);
}
export default App;
 