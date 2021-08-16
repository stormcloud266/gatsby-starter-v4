import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as styles from './container.module.scss'

const Container = ({
	wrapper,
	wrapperSm,
	wrapperSmOnTab,
	section,
	sectionTop,
	sectionBottom,
	textBlock,
	flex,
	collapseOnMd,
	justify,
	align,
	bgDark,
	bgAccent,
	isSection,
	className,
	children,
}) => {
	const stylesInline = {
		justifyContent: justify ? justify : null,
		alignItems: align ? align : null,
	}

	const classes = classnames(
		wrapper && styles.wrapper,
		wrapperSm && styles.wrapperSm,
		wrapperSmOnTab && styles.wrapperSmOnTab,
		section && styles.section,
		sectionTop && styles.sectionTop,
		sectionBottom && styles.sectionBottom,
		textBlock && styles.textBlock,
		flex && styles.flex,
		collapseOnMd && styles.collapseOnMd,
		bgDark && styles.bgDark,
		bgAccent && styles.bgAccent,
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

export default Container

Container.propTypes = {
	wrapper: PropTypes.bool,
	wrapperSm: PropTypes.bool,
	wrapperSmOnTab: PropTypes.bool,
	section: PropTypes.bool,
	sectionTop: PropTypes.bool,
	sectionBottom: PropTypes.bool,
	flex: PropTypes.bool,
	collapseOnMd: PropTypes.bool,
	justify: PropTypes.oneOf([
		'start',
		'center',
		'space-between',
		'space-around',
		'space-evenly',
	]),
	align: PropTypes.oneOf(['stretch', 'center', 'start', 'end']),
	textBlock: PropTypes.bool,
	bgDark: PropTypes.bool,
	bgAccent: PropTypes.bool,
	isSection: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
}
