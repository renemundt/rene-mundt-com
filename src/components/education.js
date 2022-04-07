import React from 'react'
import Period from './common/period'
import { Heading3 } from './common/headings'
import { Row, Col } from './common/grid'

const EducationInfo = ({ education, period }) => {
  return (
    <Col>
      <div>{education}</div>
      <Period>{period}</Period>
    </Col>
  )
}

const Education = () => {
  return (
    <Row>
      <Heading3>Education</Heading3>
      <div>
        <EducationInfo education={'HTX'} period={'1992-1995'} />
        <EducationInfo education={'HH'} period={'1995-1996'} />
        <EducationInfo education={'Procurement education F.L.Smidth'} period={'1996-1998'} />
        <EducationInfo education={'Datamatiker'} period={'1998-2000'} />
        <EducationInfo education={'Bachelor Computer Science IHK'} period={'2007-2012'} />
      </div>
    </Row>
  )
}

export default Education
