import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import { NavLinks } from '@global'
import { Hamburger, Times } from '@images/icons'
import { Container } from '@UI'
import * as styles from './header.module.scss'
import Helmet from 'react-helmet'
import { useCurrentWidth } from '@hooks'

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)

	const width = useCurrentWidth()

	useEffect(() => {
		if (width > 900) {
			setIsNavOpen(false)
		}
	}, [width])

	return (
		<header className={styles.header}>
			<Helmet
				bodyAttributes={{
					class: isNavOpen ? styles.noScroll : null,
				}}
			/>
			<Container wrapper className={styles.container}>
				<Link to='/' className={styles.logo}>
					Logo
				</Link>

				<button
					className={classnames(styles.toggle, isNavOpen && styles.toggleOpen)}
					onClick={() => setIsNavOpen(!isNavOpen)}
					aria-label={`${isNavOpen ? 'close' : 'open'} menu`}
				>
					{isNavOpen ? <Times /> : <Hamburger />}
				</button>

				<nav className={classnames(styles.nav, isNavOpen && styles.open)}>
					<NavLinks />
				</nav>
			</Container>
		</header>
	)
}

export default Header
