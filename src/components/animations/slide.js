import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const Slide = ({
	bgColor = '#2e2e33',
	delay = 0,
	duration = 1.5,
	triggerOnce = true,
	threshold = 0.2,
	from = 'left',
	style = {},
	children,
	...rest
}) => {
	const opacityVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0 },
		},
	}

	const commonTransitions = {
		duration: duration / 2,
		ease: [0.185, -0.01, 0, 1],
	}

	const blockVariants = {
		hidden: {
			x: from === 'left' ? '-103%' : from === 'right' ? '103%' : 0,
			y: from === 'top' ? '-103%' : from === 'bottom' ? '103%' : 0,
		},
		visible: {
			x: '0%',
			y: '0%',
			transition: {
				...commonTransitions,
				delay,
			},
		},
		end: {
			x: from === 'left' ? '103%' : from === 'right' ? '-103%' : 0,
			y: from === 'top' ? '103%' : from === 'bottom' ? '-103%' : 0,
			transition: commonTransitions,
		},
	}

	const { ref, inView } = useInView({ threshold, triggerOnce })

	const blockControls = useAnimation()
	const opacityControls = useAnimation()

	useEffect(() => {
		if (inView) {
			blockControls
				.start('visible')
				.then(() => opacityControls.start('visible'))
				.then(() => blockControls.start('end'))
		}
	}, [inView, blockControls, opacityControls])

	return (
		<div
			ref={ref}
			style={{ position: 'relative', overflow: 'hidden', ...style }}
			{...rest}
		>
			<motion.div
				variants={opacityVariants}
				initial='hidden'
				animate={opacityControls}
			>
				{children}
			</motion.div>
			<motion.div
				style={{
					backgroundColor: bgColor,
					position: 'absolute',
					top: 0,
					left: 0,
					height: '100%',
					width: '100%',
				}}
				variants={blockVariants}
				initial='hidden'
				animate={blockControls}
			/>
		</div>
	)
}

export default Slide

Slide.propTypes = {
	bgColor: PropTypes.string,
	delay: PropTypes.number,
	threshold: PropTypes.number,
	duration: PropTypes.number,
	triggerOnce: PropTypes.bool,
	from: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
	style: PropTypes.object,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
}
