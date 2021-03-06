module.exports = {
	siteMetadata: {
		title: `René Mundt - CV`,
		description: `Curriculum Vitae of René Mundt`,
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
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/rene-mundt-icon.png`,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
