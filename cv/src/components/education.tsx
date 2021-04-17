import styled from "@emotion/styled"
import * as React from "react"
import { Heading3 } from "./shared"

const Container = styled.div`
	display: flex;
	margin: 1rem;
	justify-content: space-between;
	@media (max-width: 600px) {
		flex: 1;
		flex-direction: column;
	}
`

const EducationInfo = styled.div`
	display: flex;
	justify-content: space-between;
	min-width:500px;
	@media (max-width: 600px) {
		min-width: unset;
	}
`

const Education: React.FC = () => {
	return (
		<Container>
			<Heading3>Education</Heading3>
			<div>
				<EducationInfo>
					<div>HTX</div>
					<div>1992-1995</div>
				</EducationInfo>
				<EducationInfo>
					<div>HH</div>
					<div>1995-1996</div>
				</EducationInfo>
				<EducationInfo>
					<div>Procurement education F.L.Smidth</div>
					<div>1996-1998</div>
				</EducationInfo>
				<EducationInfo>
					<div>Datamatiker</div>
					<div>1998-2000</div>
				</EducationInfo>
				<EducationInfo>
					<div>Bachelor Computer Science IHK</div>
					<div>2007-2012</div>
				</EducationInfo>
			</div>
		</Container>
	)
}

export default Education
