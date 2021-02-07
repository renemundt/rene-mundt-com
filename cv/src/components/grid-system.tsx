import styled from "@emotion/styled"

export const Grid = styled.div``

interface RowProps {
	css?: any
}

export const Row = styled.div<RowProps>`
	display: flex;
`
interface ColProps {
	size: number
}

export const Col = styled.div<ColProps>`
	flex: ${props => props.size};
`
