import React from 'react'
import {graphql} from 'gatsby'
import {css} from 'emotion'
import tw from 'tailwind.macro'
import Layout from '../components/Layout'

const styles = {
  container: css(tw`px-2 max-w-md mx-auto`),
}

export default ({data}) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <article className={styles.container}>
        <h1>{post.frontmatter.title}</h1>

        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        title
      }
    }
  }
`
