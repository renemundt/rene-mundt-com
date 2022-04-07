import React from 'react'
import Period from './common/period'
import { Heading3 } from './common/headings'
import { Row, Col } from './common/grid'

const Info = ({ title, period }) => {
  return (
    <Col>
      <div> {title}</div>
      <Period>{period}</Period>
    </Col>
  )
}

const JobExperience = () => {
  return (
    <Row>
      <Heading3>Job experience</Heading3>
      <div>
        <Info title={'System Developer / Consultant - Ementor'} period={'2000-2002'}></Info>
        <Info title={'System Developer Novo Nordisk'} period={'2002-2004'}></Info>
        <Info title={'System Developer - Region Sjælland'} period={'2004-20010'}></Info>
        <Info title={'Full Stack Developer - Coop Danmark'} period={'2010-2012'}></Info>
        <Info title={'Full Stack Developer - Thomas Cook Airlines'} period={'2012-2016'}></Info>
        <Info title={'Full Stack / Frontend developer - DFDS'} period={'2016....'}></Info>
      </div>
    </Row>
  )
}

export default JobExperience
