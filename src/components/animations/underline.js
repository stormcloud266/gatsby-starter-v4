import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Underline = ({
	color = '#2e2e33',
	delay = 0,
	duration = 1.5,
	triggerOnce = true,
	inline,
	style,
	children,
	...rest
}) => {
	const variants = {
		hidden: {
			height: 2,
			backgroundColor: color,
			scaleX: 0,
		},
		visible: {
			scaleX: 1,
			originX: 0,
			transition: {
				duration,
				delay,
				ease: [0.185, -0.01, 0, 1],
			},
		},
	}

	const commonProps = {
		variants,
		initial: 'hidden',
		whileInView: 'visible',
		viewport: { once: triggerOnce, amount: 1 },
		...rest,
	}

	const commonStyles = {
		position: 'absolute',
		left: 0,
		width: '100%',
	}

	return inline ? (
		<span style={{ position: 'relative', display: 'inline-block' }}>
			{children}
			<motion.span
				style={{
					display: 'block',
					bottom: -2,
					...commonStyles,
					...style,
				}}
				{...commonProps}
			/>
		</span>
	) : (
		<div style={{ position: 'relative' }}>
			{children}
			<motion.div
				style={{
					bottom: 0,
					...commonStyles,
					...style,
				}}
				{...commonProps}
			/>
		</div>
	)
}

export default Underline

Underline.propTypes = {
	color: PropTypes.string,
	delay: PropTypes.number,
	duration: PropTypes.number,
	triggerOnce: PropTypes.bool,
	inline: PropTypes.bool,
	style: PropTypes.object,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
}
