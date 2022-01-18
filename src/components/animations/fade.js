import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Fade = ({
	delay = 0,
	duration = 1,
	threshold = 0.2,
	y = 0,
	x = 0,
	triggerOnce = true,
	inline,
	children,
	...rest
}) => {
	const controls = useAnimation()

	const variants = {
		hidden: { opacity: 0, y, x },
		visible: { opacity: 1, y: 0, x: 0, transition: { duration, delay } },
	}

	const inViewOptions = {
		triggerOnce,
		threshold,
	}

	const [ref, inView] = useInView(inViewOptions)

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	const commonProps = {
		ref,
		variants,
		initial: 'hidden',
		animate: controls,
		...rest,
	}

	return inline ? (
		<motion.span {...commonProps}>{children}</motion.span>
	) : (
		<motion.div {...commonProps}>{children}</motion.div>
	)
}

export default Fade

Fade.propTypes = {
	delay: PropTypes.number,
	duration: PropTypes.number,
	threshold: PropTypes.number,
	y: PropTypes.number,
	x: PropTypes.number,
	triggerOnce: PropTypes.bool,
	inline: PropTypes.bool,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
}
