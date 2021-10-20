module.exports = {
    siteMetadata: {
        siteUrl: "https://juliantellez.com",
        title: "Devscapades",
        description: "Personal blog and corner of the web",
        author: "Julian Tellez",
        social: {
            twitter: '@_juliantellez',
        },
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [{
                    resolve: 'gatsby-remark-external-links',
                    options: {
                        target: '_blank',
                    },
                }, ]
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "TODO-CHANGE-ME",
            },
        },

        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
    ],
};
