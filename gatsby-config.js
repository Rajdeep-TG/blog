require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: 'Rajdeep.ml Blog',
        description: 'Rajdeep.ml is my Attempt to let others know Programming!',
        keywords: 'Headless CMS, GraphCMS, GraphQL CMS, Gatsby',
        siteUrl: 'https://blog.rajdeep.ml'
    },
    plugins: [{
            resolve: 'gatsby-plugin-mdx',
            options: {
                gatsbyRemarkPlugins: [{
                    resolve: `gatsby-remark-highlight-code`,
                }, ],
            }
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svg/,
                },
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-graphcms',
            options: {
                endpoint: process.env.GRAPHCMS_ENDPOINT,
                token: process.env.GRAPHCMS_TOKEN,
                buildMarkdownNodes: true,
                downloadLocalImages: true,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [{
                    resolve: `gatsby-remark-highlight-code`,
                }, ],
            },
        },
    ],
}