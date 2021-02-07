import * as React from "react"
import { ChronoUnit, LocalDate } from "@js-joda/core"
import { Row, Col } from "./grid-system"
import { Heading3 } from "./shared"

const Age = () =>
	LocalDate.of(1975, 10, 17).until(LocalDate.now(), ChronoUnit.YEARS)

const PersonalInfo: React.FC = () => {
	return (
		<Row>
			<Col size={2}>
				<Heading3>Personal information</Heading3>
			</Col>
			<Col size={1}>
				<div>René Mundt</div>
				<div>Sjællandsvej 3</div>
				<div>4200 Slagelse</div>
				<div>renem@live.dk</div>
				<div>Age: {Age()} (1975-10-17) </div>
				<div>Married: Yes</div>
				<div>Children: 2</div>
				<div>Drivers license: Yes</div>
			</Col>
		</Row>
	)
}

export default PersonalInfo
