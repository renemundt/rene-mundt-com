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

const EducationInfo = styled.div`
	display: flex;
	justify-content: space-between;
	min-width:500px;
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

const Education: React.FC = () => {
	return (
		<Container>
			<Heading3>Education</Heading3>
			<div>
				<EducationInfo>
					<div>HTX</div>
					<Period>1992-1995</Period>
				</EducationInfo>
				<EducationInfo>
					<div>HH</div>
					<Period>1995-1996</Period>
				</EducationInfo>
				<EducationInfo>
					<div>Procurement education F.L.Smidth</div>
					<Period>1996-1998</Period>
				</EducationInfo>
				<EducationInfo>
					<div>Datamatiker</div>
					<Period>1998-2000</Period>
				</EducationInfo>
				<EducationInfo>
					<div>Bachelor Computer Science IHK</div>
					<Period>2007-2012</Period>
				</EducationInfo>
			</div>
		</Container>
	)
}

export default Education
