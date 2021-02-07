import * as React from "react"
import { Col, Row } from "./grid-system"
import { Heading3 } from "./shared"

const Education: React.FC = () => {
	return (
		<Row>
			<Col size={1}>
				<Heading3>Education</Heading3>
			</Col>
			<Col size={1}>
				<div>HTX</div>
				<div>HH</div>
				<div>Procurement education F.L.Smidth</div>
				<div>Datamatiker</div>
				<div>Bachelor Computer Science IHK</div>
			</Col>
			<Col size={1}>
				<div>1992-1995</div>
				<div>1995-1996</div>
				<div>1996-1998</div>
				<div>1998-2000</div>
				<div>2007-2012</div>
			</Col>
		</Row>
	)
}

export default Education
