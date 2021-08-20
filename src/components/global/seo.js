import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const Seo = ({
	title = `My Starter`,
	description = `This is a description`,
	url = `site.com`,
	imageUrl,
	article,
}) => {
	const data = useStaticQuery(graphql`
		query SeoQuery {
			banner: file(name: { eq: "starter-banner" }) {
				publicURL
			}
			meta: site {
				siteMetadata {
					siteUrl
				}
			}
		}
	`)

	const cardImageUrl = imageUrl
		? imageUrl
		: data.meta.siteMetadata.siteUrl + data.banner.publicURL

	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />

			{/***********  twitter cards ***********/}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={cardImageUrl} />

			{/***********  open graph ***********/}
			<meta property='og:url' content={url} />
			<meta property='og:type' content={article ? 'article' : 'website'} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={cardImageUrl} />
		</Helmet>
	)
}

export default Seo
