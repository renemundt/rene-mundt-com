import * as React from "react"
import { Col, Row } from "./grid-system"
import { Heading3 } from "./shared"

const JobExperience: React.FC = () => {
	return (
		<Row>
			<Col size={1}>
				<Heading3>Job experience</Heading3>
			</Col>
			<Col size={1}>
				<div>System Developer / Consultant - Ementor</div>
				<div>System Developer Novo Nordisk</div>
				<div>Consultant / programmer - Region Sjælland</div>
				<div>Full Stack Developer - Coop Danmark</div>
				<div>Full Stack Developer - Thomas Cook Airlines</div>
				<div>Lead Developer / Scrum Master - Thomas Cook Airlines</div>
				<div>Full stack / Frontend developer - DFDS</div>
			</Col>
			<Col size={1}>
				<div>2000-2002</div>
				<div>2002-2004</div>
				<div>2004-2010</div>
				<div>2010-2012</div>
				<div>2012-2016</div>
				<div>2013-2016</div>
				<div>2016-....</div>
			</Col>
		</Row>
	)
}

export default JobExperience
