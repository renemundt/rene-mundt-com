import React from 'react'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/react'
import { SEO } from '../components/seo'

const pageStyles = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  a {
    font-size: 6vh;
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: bolder;
  }
`

const IndexPage = () => {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: slategray;
          }
        `}
      />
      <main css={pageStyles}>
        <title>René Mundt</title>
        <Link to="/cv">CV</Link>
        <a href="https://renemundt.blogspot.com/" target="_blank" rel="noreferrer">
          Blog
        </a>
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <SEO />
