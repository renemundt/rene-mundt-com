import * as React from 'react'
import { css } from '@emotion/react'
import Period from './common/period'
import { Heading3 } from './shared'

const container = css`
  display: flex;
  margin: 1rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex: 1;
    flex-direction: column;
  }
`

const infoStyles = css`
  display: flex;
  justify-content: space-between;
  min-width: 500px;
  align-items: flex-end;
  @media (max-width: 768px) {
    min-width: unset;
  }
`

const EducationInfo = ({ education, period }) => {
  return (
    <div css={infoStyles}>
      <div>{education}</div>
      <Period>{period}</Period>
    </div>
  )
}

const Education = () => {
  return (
    <div css={container}>
      <Heading3>Education</Heading3>
      <div>
        <EducationInfo education={'HTX'} period={'1992-1995'} />
        <EducationInfo education={'HH'} period={'1995-1996'} />
        <EducationInfo education={'Procurement education F.L.Smidth'} period={'1996-1998'} />
        <EducationInfo education={'Datamatiker'} period={'1998-2000'} />
        <EducationInfo education={'Bachelor Computer Science IHK'} period={'2007-2012'} />
      </div>
    </div>
  )
}

export default Education
