import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import * as styles from './grid.module.scss'

const Grid = ({ children, columns, gap, className, ...rest }) => {
	const numCol =
		columns && columns <= 6 ? `grid${columns}` : columns > 6 ? 'grid6' : 'grid3'
	const classes = classnames(
		gap && gap === 'sm' && styles.gridGapSm,
		gap && gap === 'lg' && styles.gridGapLg,
		styles[numCol],
		className && className,
		styles.grid
	)
	return (
		<div className={classes} {...rest}>
			{children}
		</div>
	)
}

export default Grid

Grid.propTypes = {
	columns: PropTypes.number,
	gap: PropTypes.oneOf(['sm', 'lg']),
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
}
