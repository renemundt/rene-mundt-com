import React from 'react'
import { css } from '@emotion/react'

const container = css`
  max-width: 1280px;
  min-height: 100% !important;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`

const wrapper = css`
  background-color: #ffffff;
  min-height: 100% !important;
`

const Layout = ({ children }) => {
  return (
    <div css={container}>
      <div css={wrapper}>{children}</div>
    </div>
  )
}

export default Layout
