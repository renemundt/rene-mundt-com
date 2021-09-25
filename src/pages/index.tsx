import { css } from "@emotion/core"
import { navigate } from "gatsby-link"
import * as React from "react"
import { ChangeEvent, useState } from "react"
import SEO from "../components/seo"

const container = css`
	/* background-color: #000000; */
	font-family: monospace;
	text-transform: lowercase;
	font-size: 50px;
	width: 100%;
	height: 100%;
`

const inputWrapper = css`
	input {
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	input:focus {
		outline: none;
	}
	input::placeholder {
		color: darkgoldenrod;
	}
`

const inputBeautify = (state: passwordState) => {
	let color = "darkgoldenrod"
	if (state === "valid") color = "darkgreen"
	if (state === "invalid") color = "darkred"
	return css`
		border: none;
		font-size: 50px;
		background-color: #000000;
		text-align: center;
		text-transform: lowercase;
		color: ${color};
		-webkit-text-security: disc;
		caret-color: transparent;
	`
}

const handleOnChange = (
	event: ChangeEvent<HTMLInputElement>
): passwordState => {
	if (event.target.value.toLowerCase() === "renemundt") {
		setTimeout(() => {
			navigate("/cv/")
		}, 2000)
		return "valid"
	}
	if (
		event.target.value.length === 9 &&
		event.target.value.toLowerCase() !== "renemundt"
	)
		return "invalid"
	return "notLongEnough"
}

type passwordState = "valid" | "invalid" | "notLongEnough"

const IndexPage: React.FC = () => {
	const [invalidPassword, setInvalidPassword] = useState<passwordState>(
		"notLongEnough"
	)
	return (
		<div css={container}>
			<SEO title="Home" />
			<div css={inputWrapper}>
				<input
					css={() => inputBeautify(invalidPassword)}
					name="name"
					autoFocus
					autoComplete="off"
					spellCheck="false"
					maxLength={9}
					placeholder="enter access code"
					onChange={(e) => {
						setInvalidPassword(handleOnChange(e))
					}}
				/>
			</div>
		</div>
	)
}

export default IndexPage
