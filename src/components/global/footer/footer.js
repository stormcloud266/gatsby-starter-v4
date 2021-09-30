import React from 'react'
import { NavLinks } from '@global'
import * as styles from './footer.module.scss'

const Footer = () => (
	<footer className={styles.footer}>
		<nav className={styles.nav}>
			<NavLinks />
		</nav>
	</footer>
)

export default Footer
