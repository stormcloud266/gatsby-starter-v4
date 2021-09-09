import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as styles from './card.module.scss'

const Card = ({ image, children, shadow, outline, className, ...rest }) => {
	const cardImage = getImage(image)
	const classes = classnames(
		shadow && styles.shadow,
		outline && styles.outline,
		className && className,
		styles.card
	)

	return (
		<div className={classes} {...rest}>
			<GatsbyImage image={cardImage} alt='' className={styles.image} />
			<div className={styles.textContainer}>{children}</div>
		</div>
	)
}

export default Card

Card.propTypes = {
	shadow: PropTypes.bool,
	outline: PropTypes.bool,
	image: PropTypes.object,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	rest: PropTypes.object,
}
