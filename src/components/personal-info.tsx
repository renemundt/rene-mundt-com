import * as React from "react"
import { ChronoUnit, LocalDate } from "@js-joda/core"
import { Heading3 } from "./shared"
import styled from "@emotion/styled"

const Age = () =>
	LocalDate.of(1975, 10, 17).until(LocalDate.now(), ChronoUnit.YEARS)

const Container = styled.div`
	display: flex;
	margin: 1rem;
	justify-content: space-between;
	@media (max-width: 768px) {
		flex: 1;
		flex-direction: column;
	}
`

const Info = styled.div`
	min-width: 150px;
`

const PersonalInfo: React.FC = () => (
	<Container>
		<Heading3>Personal information</Heading3>
		<Info>
			<div>René Mundt</div>
			<div>Sjællandsvej 3</div>
			<div>4200 Slagelse</div>
			<div>renem@live.dk</div>
			<div>Age: {Age()} (1975-10-17) </div>
			<div>Married: Yes</div>
			<div>Children: 2</div>
			<div>Drivers license: Yes</div>
		</Info>
	</Container>
)

export default PersonalInfo
