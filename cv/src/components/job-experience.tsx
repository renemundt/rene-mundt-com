import styled from "@emotion/styled"
import * as React from "react"
import { Heading3 } from "./shared"

const Container = styled.div`
	display: flex;
	margin: 1rem;
	justify-content: space-between;
	@media (max-width: 768px) {
		flex: 1;
		flex-direction: column;
	}
`

const JobInfo = styled.div`
	display: flex;
	justify-content: space-between;
	min-width: 500px;
	@media (max-width: 768px) {
		min-width: unset;
	}
`

const Period = styled.div`
	min-width: 150px;
	@media (max-width: 480px) {
		min-width: 75px;
	}
`

const JobExperience: React.FC = () => {
	return (
		<Container>
			<Heading3>Job experience</Heading3>
			<div>
				<JobInfo>
					<div>System Developer / Consultant - Ementor</div>
					<Period>2000-2002</Period>
				</JobInfo>
				<JobInfo>
					<div>System Developer Novo Nordisk</div>
					<Period>2002-2004</Period>
				</JobInfo>
				<JobInfo>
					<div>Systen developer - Region Sjælland</div>
					<Period>2004-2010</Period>
				</JobInfo>
				<JobInfo>
					<div>Full Stack Developer - Coop Danmark</div>
					<Period>2010-2012</Period>
				</JobInfo>
				<JobInfo>
					<div>Full Stack Developer - Thomas Cook Airlines</div>
					<Period>2012-2016</Period>
				</JobInfo>
				<JobInfo>
					<div>Full Stack / Frontend developer - DFDS</div>
					<Period>2016-....</Period>
				</JobInfo>
			</div>
		</Container>
	)
}

export default JobExperience
