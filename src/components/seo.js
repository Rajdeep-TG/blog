import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import ShareImage from 'shareimage';

function getCoverImage(title) {
  return ShareImage({
    title: title,
    cloudName: 'zype',
    imagePublicID: 'CodeWithR/TEMPLATE',
    titleFont: 'futura',
    textColor: '232129',
  });
}

function Seo({ title, seo }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          keywords
          title
        }
      }
    }
  `)

  const defaultTitle = siteMetadata.title

  const pageDescription = seo?.description || siteMetadata.description
  const pageKeywords = seo?.keywords || siteMetadata.keywords
  const pageTitle = seo?.title || title || 'Home'

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <title>{pageTitle}</title>
      <link rel="icon" href="https://res.cloudinary.com/zype/image/upload/w_16,h_16/CodeWithR/logo" type="image/png" />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta property="image" content={getCoverImage(seo?.title || title || 'Home')} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:image" content={getCoverImage(seo?.title || title || 'Home')} />
      <meta name="og:type" content="website" />

      <meta name="twitter:site" content="@RajdeepTG" />
      <meta name="twitter:title" content={`${pageTitle} | ${defaultTitle}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content={getCoverImage(seo?.title || title || 'Home')} />
    </Helmet>
  )
}

export default Seo
