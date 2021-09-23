import styled from "@emotion/styled"
import * as React from "react"
import { Col, Row } from "./grid-system"

const Heading1 = styled.header`
	text-align: right;
	border-bottom: 2px solid;
`

const Header: React.FC = () => {
	return (
		<Row>
			<Col size={1}>
				<Heading1>
					<h1>Curriculum Vitae</h1>
				</Heading1>
			</Col>
		</Row>
	)
}

export default Header
