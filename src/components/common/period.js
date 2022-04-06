import * as React from 'react'
import { css } from '@emotion/react'

const Period = ({ children }) => (
  <div
    css={css`
      min-width: 150px;
      margin-left: 20px;
      @media (max-width: 480px) {
        min-width: 75px;
      }
    `}
  >
    {children}
  </div>
)

export default Period
