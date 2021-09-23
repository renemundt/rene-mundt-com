import styled from "@emotion/styled"
import * as React from "react"

const Container = styled.div`
	max-width: 1280px;
	margin: auto;
`

const Layout: React.FC = ({ children }) => {
	return <Container>{children}</Container>
}

export default Layout
