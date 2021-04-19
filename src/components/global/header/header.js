import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Hamburger, Times, Logo } from '@images/icons'
import * as styles from './header.module.scss'

const Header = () => {
	const [isOpen, toggleNav] = useState(false)

	return (
		<header className={styles.header}>
			<div className={`${styles.container} wrapper`}>
				<Link to='/' className={styles.logo}>
					<Logo />
				</Link>

				<button className={styles.toggle} onClick={() => toggleNav(!isOpen)}>
					{isOpen ? <Times /> : <Hamburger />}
				</button>

				<nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
					<Link to='/'>Home</Link>
					<Link to='/examples'>Examples</Link>
					<Link to='/'>Page</Link>
					<Link to='/'>Page</Link>
					<Link to='/'>Page</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
