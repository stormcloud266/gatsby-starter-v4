import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Fade = ({
	delay = 0,
	duration,
	transformDuration = 1.5,
	opacityDuration = 0.5,
	threshold = 0.2,
	y = 0,
	x = 0,
	triggerOnce = true,
	inline,
	children,
	...rest
}) => {
	const variants = {
		hidden: { opacity: 0, y, x },
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				duration,
				delay,
				y: {
					ease: [0.185, -0.01, 0, 1],
					duration: duration || transformDuration,
				},
				x: {
					ease: [0.185, -0.01, 0, 1],
					duration: duration || transformDuration,
				},
				opacity: {
					ease: [1, 0, 0.725, 1],
					duration: duration || opacityDuration,
				},
			},
		},
	}

	const commonProps = {
		variants,
		initial: 'hidden',
		whileInView: 'visible',
		viewport: { once: triggerOnce, amount: threshold },
		...rest,
	}

	return inline ? (
		<motion.span style={{ display: 'inline-block' }} {...commonProps}>
			{children}
		</motion.span>
	) : (
		<motion.div {...commonProps}>{children}</motion.div>
	)
}

export default Fade

Fade.propTypes = {
	delay: PropTypes.number,
	transformDuration: PropTypes.number,
	opacityDuration: PropTypes.number,
	duration: PropTypes.number,
	threshold: PropTypes.number,
	y: PropTypes.number,
	x: PropTypes.number,
	triggerOnce: PropTypes.bool,
	inline: PropTypes.bool,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
}
