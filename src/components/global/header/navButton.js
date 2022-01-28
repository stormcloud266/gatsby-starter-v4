import * as React from 'react'
import { motion } from 'framer-motion'
import classnames from 'classnames'
import * as styles from './header.module.scss'

const Path = (props) => (
	<motion.path
		fill='transparent'
		strokeWidth='3'
		stroke='currentColor'
		strokeLinecap='round'
		{...props}
	/>
)

const NavButton = ({ onClick, isOpen }) => {
	return (
		<button
			onClick={onClick}
			className={classnames(styles.toggle, isOpen && styles.toggleOpen)}
			aria-label={`${isOpen ? 'close' : 'open'} menu`}
		>
			<svg width='20' height='20' viewBox='0 0 23 23'>
				<Path
					variants={{
						closed: { d: 'M 2 2.5 L 20 2.5' },
						open: { d: 'M 3 16.5 L 17 2.5' },
					}}
					animate={isOpen ? 'open' : 'closed'}
				/>
				<Path
					d='M 2 9.423 L 20 9.423'
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
					animate={isOpen ? 'open' : 'closed'}
				/>
				<Path
					variants={{
						closed: { d: 'M 2 16.346 L 20 16.346' },
						open: { d: 'M 3 2.5 L 17 16.346' },
					}}
					animate={isOpen ? 'open' : 'closed'}
				/>
			</svg>
		</button>
	)
}
export default NavButton
