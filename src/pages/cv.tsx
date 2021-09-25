import * as React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Grid } from "../components/grid-system"
import Header from "../components/header"
import PersonalInfo from "../components/personal-info"
import Education from "../components/education"
import JobExperience from "../components/job-experience"
import Experience from "../components/experience"
import Languages from "../components/languages"

const CvPage: React.FC = () => (
	<Layout>
		<SEO title="CV" />
		<Grid>
			<Header />
			<PersonalInfo />
			<Education />
			<JobExperience />
			<Experience />
			<Languages />
		</Grid>
	</Layout>
)

export default CvPage
