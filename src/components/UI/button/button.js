import React from 'react'
import { Link } from 'gatsby'

const Button = ({ href, to, cta, children, ...rest }) => {
	const classes = cta ? 'button cta' : 'button'

	if (href) {
		return (
			<a
				href={href}
				className={classes}
				target='_blank'
				rel='noreferrer'
				{...rest}
			>
				{children}
			</a>
		)
	} else if (to) {
		return (
			<Link to={to} {...rest} className={classes}>
				{children}
			</Link>
		)
	} else {
		return (
			<button {...rest} className={classes}>
				{children}
			</button>
		)
	}
}

export default Button
