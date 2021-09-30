import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as styles from './flex.module.scss'

const Flex = ({
	collapseOnMd,
	layout,
	alignStart,
	reverseOnMd,
	reverseOnSm,
	isSection,
	className,
	children,
	...rest
}) => {
	const classes = classnames(
		styles.flex,
		collapseOnMd && styles.collapseOnMd,
		reverseOnMd && styles.reverseOnMd,
		reverseOnSm && styles.reverseOnSm,
		alignStart && styles.alignStart,
		layout && layout === '1-2' && styles.flex12,
		layout && layout === '2-1' && styles.flex21,
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

export default Flex

Flex.propTypes = {
	collapseOnMd: PropTypes.bool,
	layout: PropTypes.oneOf(['1-2', '2-1']),
	alignStart: PropTypes.bool,
	isSection: PropTypes.bool,
	reverseOnMd: PropTypes.bool,
	reverseOnSm: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
}
