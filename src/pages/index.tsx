import { css } from "@emotion/core"
import { navigate } from "gatsby-link"
import * as React from "react"
import { ChangeEvent } from "react"
import SEO from "../components/seo"

const container = css`
	background-color: #000000;
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
		color: darkgreen;
	}
	input:focus {
		outline: none;
	}
	input::placeholder {
		color: darkgreen;
	}
`

const inputBeautify = css`
	border: none;
	font-size: 50px;
	background-color: #000000;
	caret-color: darkgreen;
	text-align: center;
	text-transform: lowercase;
	color: darkgreen;
	-webkit-text-security: disc;
	caret-color: transparent;
`

const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
	if (event.target.value.toLowerCase() === "renemundt") navigate("/cv/")
}

const IndexPage: React.FC = () => (
	<div css={container}>
		<SEO title="Home" />
		<div css={inputWrapper}>
			<input
				css={inputBeautify}
				name="name"
				autoFocus
				autoComplete="off"
				spellCheck="false"
				maxLength={9}
				placeholder="enter access code"
				onChange={handleOnChange}
			/>
		</div>
	</div>
)

export default IndexPage
