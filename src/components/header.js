import * as React from 'react'
import { css } from '@emotion/react'

const heading1 = css`
  text-align: right;
  border-bottom: 2px solid;
  margin: 0 1rem 0 0;
  height: 60px;
`

const Header = () => (
  <header>
    <h1 css={heading1}>Curriculum Vitae</h1>
  </header>
)

export default Header
