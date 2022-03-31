import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
// import * as styles from './backgroundImage.module.scss'

const BackgroundImage = ({
	image,
	overlayColor,
	className,
	overlayClassName,
	...rest
}) => {
	const absolute = {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: -1,
	}
	return (
		<>
			<GatsbyImage
				image={getImage(image)}
				alt=''
				className={className}
				style={absolute}
				{...rest}
			/>
			{overlayColor && (
				<div
					style={{ ...absolute, background: overlayColor }}
					className={overlayClassName}
				/>
			)}
		</>
	)
}

export default BackgroundImage
