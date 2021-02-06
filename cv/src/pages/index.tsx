import * as React from "react"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import { Col, Grid, Row } from "../components/grid-system"

const Heading1 = styled.header`
	text-align: right;
	border-bottom: 2px solid;
`

const Heading3 = styled.h3`
	font-weight: bolder;
`

const IndexPage: React.FC = () => (
	<Layout>
		<SEO title="CV" />
		<Grid>
			<Row>
				<Col size={1}>
					<Heading1>
						<h1>Curriculum Vitae</h1>
					</Heading1>
				</Col>
			</Row>
			<Row>
				<Col size={2}>
					<Heading3>Personal information</Heading3>
				</Col>
				<Col size={1}>
					<div>René Mundt</div>
					<div>Sjællandsvej 3</div>
					<div>4200 Slagelse</div>
					<div>renem@live.dk</div>
				</Col>
			</Row>
		</Grid>
	</Layout>
)

export default IndexPage
