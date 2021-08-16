import React, { useState } from 'react'
import { Link } from 'gatsby'
import NavLinks from '@global/navLinks'
import { Hamburger, Times, Logo } from '@images/icons'
import { Container } from '@UI'
import * as styles from './header.module.scss'

const Header = () => {
	const [isOpen, toggleNav] = useState(false)

	return (
		<header className={styles.header}>
			<Container wrapper className={styles.container}>
				<Link to='/' className={styles.logo}>
					<Logo />
				</Link>

				<button className={styles.toggle} onClick={() => toggleNav(!isOpen)}>
					{isOpen ? <Times /> : <Hamburger />}
				</button>

				<nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
					<NavLinks />
				</nav>
			</Container>
		</header>
	)
}

export default Header
