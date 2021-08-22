import React from 'react'
import * as styles from './title.module.scss'

const Title = ({ tag, children }) => {
	switch (tag) {
		case 'h1':
			return <h1 className={styles.title}>{children}</h1>
		case 'h3':
			return <h3 className={styles.title}>{children}</h3>
		case 'h4':
			return <h4 className={styles.title}>{children}</h4>
		case 'h5':
			return <h5 className={styles.title}>{children}</h5>
		case 'h6':
			return <h6 className={styles.title}>{children}</h6>
		default:
			return <h2 className={styles.title}>{children}</h2>
	}
}

export default Title
