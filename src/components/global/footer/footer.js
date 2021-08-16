import React from 'react'
import NavLinks from '@global/navLinks'
import * as styles from './footer.module.scss'

const Footer = () => (
	<footer className={styles.footer}>
		<div className='wrapper'>
			<nav className={styles.nav}>
				<NavLinks />
			</nav>
		</div>
	</footer>
)

export default Footer
