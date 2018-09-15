import React from 'react'
import {css} from 'emotion'
import tw from 'tailwind.macro'
import image from '../images/avatar.png'

const styles = {
  avatar: css(tw`rounded-circle w-32`),
}

const Avatar = ({className}) => (
  <img
    src={image}
    className={`${styles.avatar} ${className}`}
    alt="with-heart avatar"
  />
)

export default Avatar
