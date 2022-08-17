import React from 'react'
import { css } from '@emotion/react'
import Layout from '../components/layout'
import PersonalInfo from '../components/personal-info'
import Education from '../components/education'
import JobExperience from '../components/job-experience'
import Experience from '../components/experience'
import Languages from '../components/languages'

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
          <h1 css={heading1}>Curriculum Vitae</h1>
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

export const Head = () => <SEO title="René Mundt CV" description="Cirriculum of René Mundt" />
