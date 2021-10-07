import React from 'react'
import { Link } from 'gatsby'

const NavLinks = ({ ctaClass }) => {
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
			cta: true,
		},
	]
	return (
		<>
			{links.map(({ title, to, cta }) => (
				<Link to={to} key={to} className={cta ? ctaClass : null}>
					{title}
				</Link>
			))}
		</>
	)
}

export default NavLinks
