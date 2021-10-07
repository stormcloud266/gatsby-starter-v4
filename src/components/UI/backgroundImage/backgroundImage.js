import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'
import classnames from 'classnames'

import * as styles from './backgroundImage.module.scss'

const BackgroundImage = ({
	image,
	overlayColor,
	children,
	fixed,
	className,
	innerClassName,
	...rest
}) => {
	const pluginImage = getImage(image)

	const wrapperClasses = classnames(className && className)

	const innerClasses = classnames(
		styles.contentContainer,
		innerClassName && innerClassName
	)

	return (
		<BgImage
			alt=''
			image={pluginImage}
			style={{
				backgroundAttachment: fixed ? 'fixed' : 'scroll',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				position: 'relative',
			}}
			className={wrapperClasses}
		>
			{overlayColor && (
				<div className={styles.overlay} style={{ background: overlayColor }} />
			)}

			<div className={innerClasses}>{children}</div>
		</BgImage>
	)
}

export default BackgroundImage
