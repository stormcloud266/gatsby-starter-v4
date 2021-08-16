import React from 'react'
import { Link } from 'gatsby'

const NavLinks = () => {
	const links = [
		{
			title: 'Home',
			to: '/',
		},
		{
			title: 'About',
			to: '/about',
		},
		{
			title: 'Blog',
			to: '/blog',
		},
		{
			title: 'Contact',
			to: '/contact',
			specialClass: 'cta',
		},
	]
	return (
		<>
			{links.map(({ title, to, specialClass }) => (
				<Link to={to} key={to} className={specialClass ? specialClass : null}>
					{title}
				</Link>
			))}
		</>
	)
}

export default NavLinks
