import React from 'react'
import classnames from 'classnames'
import * as styles from './title.module.scss'

const Title = ({ tag, children, className }) => {
	const classes = classnames(styles.title, className && className)
	switch (tag) {
		case 'h1':
			return <h1 className={classes}>{children}</h1>
		case 'h3':
			return <h3 className={classes}>{children}</h3>
		case 'h4':
			return <h4 className={classes}>{children}</h4>
		case 'h5':
			return <h5 className={classes}>{children}</h5>
		case 'h6':
			return <h6 className={classes}>{children}</h6>
		case 'p':
			return <p className={classes}>{children}</p>
		default:
			return <h2 className={classes}>{children}</h2>
	}
}

export default Title
