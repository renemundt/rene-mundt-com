import * as React from 'react'
import { css } from '@emotion/react'

const Container = css`
  max-width: 1280px;
  min-height: 100% !important;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`

const Wrapper = css`
  background-color: #ffffff;
  min-height: 100% !important;
`

const Layout = ({ children }) => {
  return (
    <div css={Container}>
      <div css={Wrapper}>{children}</div>
    </div>
  )
}

export default Layout