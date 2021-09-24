module.exports = {
	siteMetadata: {
		title: `René Mundt`,
		description: `Homepage of René Mundt`,
		author: `René Mundt`,
	},
	plugins: [
		`gatsby-plugin-eslint`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				start_url: `/`,
				display: `minimal-ui`,
				icon: `src/images/rene-mundt-icon.png`,
			},
		},
		`gatsby-plugin-force-trailing-slashes`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
