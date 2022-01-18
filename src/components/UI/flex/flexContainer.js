import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as styles from './flex.module.scss'

const FlexContainer = ({
	collapseOnMd,
	alignStart,
	reverseOnMd,
	reverseOnSm,
	isSection,
	className,
	children,
	...rest
}) => {
	const classes = classnames(
		styles.flexContainer,
		collapseOnMd && styles.collapseOnMd,
		reverseOnMd && styles.reverseOnMd,
		reverseOnSm && styles.reverseOnSm,
		alignStart && styles.alignStart,
		className && className
	)

	return isSection ? (
		<section className={classes} {...rest}>
			{children}
		</section>
	) : (
		<div className={classes} {...rest}>
			{children}
		</div>
	)
}

export default FlexContainer

FlexContainer.propTypes = {
	collapseOnMd: PropTypes.bool,
	alignStart: PropTypes.bool,
	isSection: PropTypes.bool,
	reverseOnMd: PropTypes.bool,
	reverseOnSm: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
}
