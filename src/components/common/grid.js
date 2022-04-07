import React from 'react'
import { css } from '@emotion/react'

export const Row = ({ children }) => (
  <div
    css={css`
      display: flex;
      margin: 1rem;
      justify-content: space-between;
      @media (max-width: 768px) {
        flex: 1;
        flex-direction: column;
      }
    `}
  >
    {children}
  </div>
)

export const Col = ({ children }) => (
  <div
    css={css`
      display: flex;
      justify-content: space-between;
      min-width: 500px;
      align-items: flex-end;
      @media (max-width: 768px) {
        min-width: unset;
      }
    `}
  >
    {children}
  </div>
)
