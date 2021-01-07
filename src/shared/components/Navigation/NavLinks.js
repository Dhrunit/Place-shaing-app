import React, { useContext } from 'react'

import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'
import './NavLinks.css'
export default function NavLinks(props) {
	const auth = useContext(AuthContext)
	return (
		<ul className='nav-links'>
			<li>
				<NavLink to='/' exact>
					All Users
				</NavLink>
			</li>
			{auth.isLoggedIn && (
				<li>
					<NavLink to={`/${auth.userId}/places`}>My places</NavLink>
				</li>
			)}
			{auth.isLoggedIn && (
				<li>
					<NavLink to='/places/new'>New Place</NavLink>
				</li>
			)}
			{!auth.isLoggedIn && (
				<li>
					<NavLink to='/auth'>Authenticate</NavLink>
				</li>
			)}
			{auth.isLoggedIn && (
				<li>
					<button onClick={auth.logout}>Logout</button>
				</li>
			)}
		</ul>
	)
}
