import React from 'react'
import { css } from '@emotion/react'

export const Heading3 = ({ children }) => (
  <h3
    css={css`
      margin: 0;
      font-weight: bolder;
    `}
  >
    {children}
  </h3>
)
