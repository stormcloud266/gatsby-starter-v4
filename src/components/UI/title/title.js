import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as styles from './title.module.scss'

const Title = ({ tag, children, center, className, ...rest }) => {
	const classes = classnames(
		styles.title,
		center && styles.center,
		className && className
	)

	switch (tag) {
		case 'h1':
			return (
				<h1 className={classes} {...rest}>
					{children}
				</h1>
			)
		case 'h2':
			return (
				<h2 className={classes} {...rest}>
					{children}
				</h2>
			)
		case 'h3':
			return (
				<h3 className={classes} {...rest}>
					{children}
				</h3>
			)
		case 'h4':
			return (
				<h4 className={classes} {...rest}>
					{children}
				</h4>
			)
		case 'h5':
			return (
				<h5 className={classes} {...rest}>
					{children}
				</h5>
			)
		case 'h6':
			return (
				<h6 className={classes} {...rest}>
					{children}
				</h6>
			)
		case 'p':
			return (
				<p className={classes} {...rest}>
					{children}
				</p>
			)
		default:
			return (
				<h2 className={classes} {...rest}>
					{children}
				</h2>
			)
	}
}

export default Title

Title.propTypes = {
	tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
}
