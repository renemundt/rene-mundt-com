import * as React from 'react'
import { Col, Row } from './grid-system'
import { Heading3 } from './shared'

const Languages = () => {
  return (
    <Row>
      <Col>
        <Heading3>Languages</Heading3>
      </Col>
      <Col>
        <div>Danish</div>
        <div>English</div>
        <div>Swedish/Norwegian</div>
      </Col>
      <Col>
        <div>Fluent (speech and writing)</div>
        <div>Fluent (speech and writing)</div>
        <div>Able to understand speech and writing</div>
      </Col>
    </Row>
  )
}

export default Languages
