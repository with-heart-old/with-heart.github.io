import {injectGlobal} from 'emotion'
import tw from 'tailwind.macro'

injectGlobal`
  html, body {
    ${tw`m-0 font-serif`};
  }

  h1, h2, h3, h4, h5, h6 {
    ${tw`font-sans font-semibold m-0`};
  }

  p {
    ${tw`m-0 mb-3 leading-normal`};
  }

  h1 {
    ${tw`text-3xl mb-4`};
  }

  h2 {
    ${tw`text-2xl mb-3`};
  }

  h3 {
    ${tw`text-xl mb-3`};
  }

  h4 {
    ${tw`text-lg mb-2`};
  }

  pre, code {
    ${tw`font-mono`};
  }

  a {
    ${tw`text-purple hover:text-black`};
  }

  code {
    ${tw`bg-grey-lighter`};
  }

  code a {
    ${tw`bg-white`};
  }
`
