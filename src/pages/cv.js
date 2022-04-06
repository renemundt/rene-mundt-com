import * as React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import PersonalInfo from '../components/personal-info'
import Education from '../components/education'
import JobExperience from '../components/job-experience'
import Experience from '../components/experience'
import Languages from '../components/languages'

const cv = () => {
  return (
    <Layout>
      <div>
        <Header />
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
