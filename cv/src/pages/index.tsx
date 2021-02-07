import * as React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Grid } from "../components/grid-system"
import PersonalInfo from "../components/personal-info"
import Education from "../components/education"
import JobExperience from "../components/job-experience"
import Languages from "../components/languages"
import Header from "../components/header"

const IndexPage: React.FC = () => (
	<Layout>
		<SEO title="CV" />
		<Grid>
			<Header />
			<PersonalInfo />
			<Education />
			<JobExperience />
			<Languages />
		</Grid>
	</Layout>
)

export default IndexPage
