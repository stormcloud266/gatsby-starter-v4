import React from 'react'
import classnames from 'classnames'
import * as styles from './grid.module.scss'

const Grid = ({ children, columns, gap }) => {
	const numCol =
		columns && columns <= 6 ? `grid${columns}` : columns > 6 ? 'grid6' : 'grid3'
	const classes = classnames(
		gap && gap === 'sm' && styles.gridGapSm,
		gap && gap === 'lg' && styles.gridGapLg,
		styles[numCol],
		styles.grid
	)
	return (
		<div className={classes} style={{}}>
			{children}
		</div>
	)
}

export default Grid
