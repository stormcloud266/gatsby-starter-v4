const path = require('path')

module.exports = {
	siteMetadata: {
		title: 'gatsby-starter-v3',
		siteUrl: `https://www.gatsbyjs.com`,
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/assets/images/favicon.png',
			},
		},
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Droid Sans', 'Droid Serif'],
				},
			},
		},
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				googleAnalytics: {
					trackingId: '', // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-google-analytics', // default
					anonymize: true, // default
				},
				googleTagManager: {
					trackingId: '', // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-google-tagmanager', // default
					dataLayerName: 'dataLayer', // default
				},
				facebookPixel: {
					pixelId: '', // leave empty if you want to disable the tracker
					cookieName: 'gatsby-gdpr-facebook-pixel', // default
				},
				// defines the environments where the tracking should be available  - default is ["production"]
				environments: ['production'],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/assets/images/',
			},
			__key: 'images',
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@components': path.resolve(__dirname, 'src/components'),
					'@global': path.resolve(__dirname, 'src/components/global'),
					'@UI': path.resolve(__dirname, 'src/components/UI'),
					'@images': path.resolve(__dirname, 'src/assets/images'),
					'@styles': path.resolve(__dirname, 'src/assets/styles/'),
				},
			},
		},
	],
}
