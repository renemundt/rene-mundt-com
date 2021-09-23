import * as React from "react"
import { Col, Row } from "./grid-system"
import { Heading3 } from "./shared"

const Languages: React.FC = () => {
	return (
		<Row>
			<Col size={1}>
				<Heading3>Languages</Heading3>
			</Col>
			<Col size={1}>
				<div>Danish</div>
				<div>English</div>
				<div>Swedish/Norwegian</div>
			</Col>
			<Col size={1}>
				<div>Fluent (speech and writing)</div>
				<div>Fluent (speech and writing)</div>
				<div>Able to understand speech and writing</div>
			</Col>
		</Row>
	)
}

export default Languages
