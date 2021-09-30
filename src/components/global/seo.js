import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const Seo = ({ title, description, url, imageUrl, article }) => {
	const data = useStaticQuery(graphql`
		query SeoQuery {
			file(name: { eq: "meta-card-banner" }) {
				publicURL
			}
			site {
				siteMetadata {
					title
					description
					siteUrl
				}
			}
		}
	`)

	const cardImageUrl = imageUrl
		? imageUrl
		: data.site.siteMetadata.siteUrl + data.file.publicURL

	const siteTitle = title ? title : data.site.siteMetadata.title
	const siteDescription = description
		? description
		: data.site.siteMetadata.description

	return (
		<Helmet>
			<html lang='en' />
			<title>{siteTitle}</title>
			<meta name='description' content={siteDescription} />

			{/***********  twitter cards ***********/}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={siteTitle} />
			<meta name='twitter:description' content={siteDescription} />
			<meta name='twitter:image' content={cardImageUrl} />

			{/***********  open graph ***********/}
			<meta property='og:url' content={url} />
			<meta property='og:type' content={article ? 'article' : 'website'} />
			<meta property='og:title' content={siteTitle} />
			<meta property='og:description' content={siteDescription} />
			<meta property='og:image' content={cardImageUrl} />

			{/***********  schema ***********/}
			<script type='application/ld+json'>{`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "${data.site.siteMetadata.title}",
        "url": "${data.site.siteMetadata.siteUrl}",
      }
      `}</script>
		</Helmet>
	)
}

export default Seo
