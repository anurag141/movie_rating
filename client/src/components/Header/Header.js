import React from 'react'
import "./Header.css"

export default function Header({ onLogoutHandler, loggedIn }) {
	console.log("loggedIn", loggedIn)
	return (

		<div>
			<h1 className='HeaderTitle'>
				Movie Ratings
			</h1>
			{ loggedIn ?  <button className='button' onClick={onLogoutHandler}>Log Out</button> : <></>}
			
		</div>
		
	)
}
