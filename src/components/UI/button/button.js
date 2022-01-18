import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as styles from './button.module.scss'

const Button = ({ href, to, cta, children, className, ...rest }) => {
	const classes = classnames(
		cta && styles.cta,
		styles.button,
		className && className
	)

	let element

	if (href) {
		element = (
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
		element = (
			<Link to={to} {...rest} className={classes}>
				{children}
			</Link>
		)
	} else {
		element = (
			<button {...rest} className={classes}>
				{children}
			</button>
		)
	}

	return element
}

export default Button

Button.propTypes = {
	href: PropTypes.string,
	to: PropTypes.string,
	cta: PropTypes.bool,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
	className: PropTypes.string,
}
