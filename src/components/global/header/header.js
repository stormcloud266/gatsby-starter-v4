import React, { useState } from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import { NavLinks } from '@global'
import { Hamburger, Times } from '@images/icons'
import { Container } from '@UI'
import * as styles from './header.module.scss'

const Header = () => {
	const [isOpen, toggleNav] = useState(false)

	return (
		<header className={styles.header}>
			<Container wrapper className={styles.container}>
				<Link to='/' className={styles.logo}>
					Logo
				</Link>

				<button
					className={styles.toggle}
					onClick={() => toggleNav(!isOpen)}
					aria-label={`${isOpen ? 'close' : 'open'} menu`}
				>
					{isOpen ? <Times /> : <Hamburger />}
				</button>

				<nav className={classnames(styles.nav, isOpen && styles.open)}>
					<NavLinks />
				</nav>
			</Container>
		</header>
	)
}

export default Header
