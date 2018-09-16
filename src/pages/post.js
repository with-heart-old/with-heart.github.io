import React from 'react'
import Layout from '../components/Layout'
import {css} from 'emotion'
import tw from 'tailwind.macro'

const styles = {
  container: css(tw`px-2 max-w-md mx-auto`),
}

const PostPage = () => (
  <Layout>
    <article className={styles.container}>
      <h1>
        Why Does <code>rerole</code> Need a Bash Script? An Explainer
      </h1>

      <p>
        I recently created{' '}
        <code>
          <a href="https://github.com/with-heart/rerole">rerole</a>
        </code>
        , a wrapper for{' '}
        <code>
          <a href="https://github.com/remind101/assume-role">assume-role</a>
        </code>{' '}
        that provides a menu for selecting which of the profiles specified in{' '}
        <code>~/.aws/config</code> that the user wants to assume as their role.
        The library is a combination of an npm package intended to be installed
        globally and a shell script that the user must source in order for{' '}
        <code>rerole</code> to work correctly. This post is an explanation of
        why that situation came to be, and how the package and shell script work
        together to produce its behavior.
      </p>

      <h2>
        <code>eval $(assume-role $role)</code>
      </h2>
    </article>
  </Layout>
)

export default PostPage
