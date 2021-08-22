import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as styles from './card.module.scss'

const Card = ({ image, children, shadow, outline }) => {
	console.log('image: ', image)
	const cardImage = getImage(image)
	const classes = classnames(
		shadow && styles.shadow,
		outline && styles.outline,
		styles.card
	)

	return (
		<div className={classes}>
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
	children: PropTypes.node.isRequired,
}
