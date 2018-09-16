import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import {css} from 'emotion'
import tw from 'tailwind.macro'
import '../global-styles'
import Header from './Header'

const styles = {
  container: css(tw`w-screen`),
  divider: css(tw`my-6`),
}

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {name: 'description', content: 'anonymous programmer blog'},
            {
              name: 'keywords',
              content:
                'html,css,js,css-in-js,graphql,gatsby,react,vue,abstraction,design,ui,ux,emotion,styled-components',
            },
          ]}
        >
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Serif+JP|Source+Code+Pro"
            rel="stylesheet"
          />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={styles.container}>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
