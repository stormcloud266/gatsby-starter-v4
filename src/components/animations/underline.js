import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Underline = ({
	color = '#2e2e33',
	delay = 0,
	duration = 1.5,
	transformDuration = 1.5,
	triggerOnce = true,
	inline,
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

	return inline ? (
		<motion.span style={{ display: 'block' }} {...commonProps} />
	) : (
		<motion.div {...commonProps} />
	)
}

export default Underline

Underline.propTypes = {
	color: PropTypes.string,
	delay: PropTypes.number,
	duration: PropTypes.number,
	triggerOnce: PropTypes.bool,
	inline: PropTypes.bool,
	rest: PropTypes.object,
}
