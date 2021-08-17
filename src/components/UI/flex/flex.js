import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as styles from './flex.module.scss'

const Flex = ({
	collapseOnMd,
	justify,
	align,
	autoLayout,
	isSection,
	className,
	children,
}) => {
	const stylesInline = {
		justifyContent: justify ? justify : 'start',
		alignItems: align ? align : 'center',
	}

	const classes = classnames(
		styles.flex,
		collapseOnMd && styles.collapseOnMd,
		autoLayout && styles.autoLayout,
		className && className
	)

	return isSection ? (
		<section className={classes} style={stylesInline}>
			{children}
		</section>
	) : (
		<div className={classes} style={stylesInline}>
			{children}
		</div>
	)
}

export default Flex

Flex.propTypes = {
	collapseOnMd: PropTypes.bool,
	justify: PropTypes.oneOf([
		'start',
		'center',
		'space-between',
		'space-around',
		'space-evenly',
	]),
	align: PropTypes.oneOf(['stretch', 'center', 'start', 'end']),
	isSection: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
}
