import React from 'react'
import { css } from '@emotion/react'
import Layout from '../components/layout'
import PersonalInfo from '../components/personal-info'
import Education from '../components/education'
import JobExperience from '../components/job-experience'
import Experience from '../components/experience'
import Languages from '../components/languages'
import { Seo } from '../components/seo'

const heading1 = css`
  text-align: right;
  border-bottom: 2px solid;
  margin: 0 1rem 0 0;
  height: 60px;
`

const cv = () => {
  return (
    <Layout>
      <div>
        <header>
          <h1 css={heading1}>René Mundt - Curriculum Vitae</h1>
        </header>
        <PersonalInfo />
        <Education />
        <JobExperience />
        <Experience />
        <Languages />
      </div>
    </Layout>
  )
}

export default cv

export const Head = () => (
  <Seo
    title="René Mundt - CV, Experienced developer, Frontend, Backend"
    description="Cirriculum of René Mundt - Experienced developer, Frontend, Backend, React, Angular, Vanilla Javascript, .NET, Tech Lead"
  />
)
