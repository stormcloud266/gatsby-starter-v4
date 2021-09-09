import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as styles from './flex.module.scss'

const Flex = ({ collapseOnMd, autoLayout, isSection, className, children }) => {
	const classes = classnames(
		styles.flex,
		collapseOnMd && styles.collapseOnMd,
		autoLayout && styles.autoLayout,
		className && className
	)

	return isSection ? (
		<section className={classes}>{children}</section>
	) : (
		<div className={classes}>{children}</div>
	)
}

export default Flex

Flex.propTypes = {
	collapseOnMd: PropTypes.bool,
	autoLayout: PropTypes.bool,
	isSection: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
}
