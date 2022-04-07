import * as React from 'react'
import { css } from '@emotion/react'
import { Heading3 } from './shared'

const Container = ({ children }) => (
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

const LanguageInfo = ({ children }) => (
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

const language = css`
  @media (max-width: 450px) {
    max-width: 200px;
  }
`

const Languages = () => {
  return (
    <Container>
      <Heading3>Languages</Heading3>
      <div>
        <LanguageInfo>
          <div css={language}>Danish</div>
          <div>Fluent (speech and writing)</div>
        </LanguageInfo>
        <LanguageInfo>
          <div css={language}>English</div>
          <div>Fluent (speech and writing)</div>
        </LanguageInfo>
        <LanguageInfo>
          <div css={language}>Swedish / Norwegian</div>
          <div>Understands speech and writing</div>
        </LanguageInfo>
      </div>
    </Container>
  )
}

export default Languages
