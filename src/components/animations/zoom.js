import React from 'react'
import PropTypes from 'prop-types'
import { motion, useReducedMotion } from 'framer-motion'

const Zoom = ({
	delay = 0,
	duration = 1.5,
	distance = 1.07,
	threshold = 0.2,
	out = false,
	triggerOnce = true,
	inline,
	children,
	style,
	...rest
}) => {
	const variants = {
		hidden: { scale: out ? 1 : distance },
		visible: {
			scale: out ? distance : 1,
			transition: {
				duration,
				delay,
				ease: [0.185, -0.01, 0, 1],
			},
		},
	}
	const prefersReducedMotion = useReducedMotion()

	const absolute = {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		zIndex: -1,
	}

	const commonProps = {
		variants: prefersReducedMotion ? '' : variants,
		initial: 'hidden',
		whileInView: 'visible',
		viewport: { once: triggerOnce, amount: threshold },
		...rest,
	}

	return inline ? (
		<motion.span
			style={{ display: 'inline-block', ...absolute, ...style }}
			{...commonProps}
		>
			{children}
		</motion.span>
	) : (
		<motion.div style={{ ...absolute, ...style }} {...commonProps}>
			{children}
		</motion.div>
	)
}

export default Zoom

Zoom.propTypes = {
	delay: PropTypes.number,
	duration: PropTypes.number,
	threshold: PropTypes.number,
	out: PropTypes.bool,
	triggerOnce: PropTypes.bool,
	inline: PropTypes.bool,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
}
