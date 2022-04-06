import * as React from 'react'
import { css } from '@emotion/react'

export const Row = ({ children }) => (
  <div
    css={css`
      display: flex;
      align-items: baseline;
      margin: 1rem;
    `}
  >
    {children}
  </div>
)

export const Col = ({ children }) => (
  <div
    css={css`
      flex: 1;
    `}
  >
    {children}
  </div>
)
