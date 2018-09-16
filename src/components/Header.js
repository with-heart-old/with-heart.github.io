import React from 'react'
import {Link} from 'gatsby'
import {css} from 'emotion'
import tw from 'tailwind.macro'
import Avatar from './Avatar'

const styles = {
  container: css(tw`w-full mb-8 text-center`),
  link: css(tw`no-underline text-black hover:underline`),
}

const Header = ({siteTitle}) => (
  <div className={styles.container}>
    <Avatar />
    <h1 style={{margin: 0}}>
      <Link to="/" className={styles.link}>
        {siteTitle}
      </Link>
    </h1>
  </div>
)

export default Header
