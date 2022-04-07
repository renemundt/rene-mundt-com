import React from 'react'
import { css } from '@emotion/react'
import { Heading3 } from './common/headings'
import { Row, Col } from './common/grid'

const language = css`
  @media (max-width: 450px) {
    max-width: 100px;
  }
`

const Languages = () => {
  return (
    <Row>
      <Heading3>Languages</Heading3>
      <div>
        <Col>
          <div css={language}>Danish</div>
          <div>Fluent (speech and writing)</div>
        </Col>
        <Col>
          <div css={language}>English</div>
          <div>Fluent (speech and writing)</div>
        </Col>
        <Col>
          <div css={language}>Swedish / Norwegian</div>
          <div>Understands speech and writing</div>
        </Col>
      </div>
    </Row>
  )
}

export default Languages
