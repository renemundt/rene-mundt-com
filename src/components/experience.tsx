import styled from "@emotion/styled"
import * as React from "react"
import { Col, Row } from "./grid-system"
import { Heading3 } from "./shared"

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`

const TableHeader = styled.th`
	text-align: left;
	border: 1px  solid;
	padding: 10px;
`
const TableData = styled.td`
	text-align: left;
	border: 1px  solid;
	padding: 10px;
`

const Experience: React.FC = () => {
	return (
		<>
			<Row>
				<Col size={1}>
					<Heading3>Experience</Heading3>
				</Col>
			</Row>
			<Row>
				<Table>
					<thead>
						<tr>
							<TableHeader>Category</TableHeader>
							<TableHeader>Technology</TableHeader>
						</tr>
					</thead>
					<tbody>
						<tr>
							<TableData>Frontend/Web</TableData>
							<TableData>
								ASP.NET MVC/WebForms, Angular2+, Reactjs, npm, Javascript,
								Typescript, Angularjs, Jest, Jasmine, Nightwatch, Cypress.io
							</TableData>
						</tr>
						<tr>
							<TableData>Backend</TableData>
							<TableData>
							Nuget, WebApi, Console applications, WPF, Microsoft Forms, Unit
						test, SQL, SQL Server Management Studio, Nodejs, IoC, AWS DynamoDB,
						CosmosDb, Elastic Search (ELK), NHibernate, Design patterns
							</TableData>
						</tr>
						<tr>
							<TableData>Tools</TableData>
							<TableData>
							Visual Studio, Visual Studio Code, Fiddler, Postman, Google Chrome
						Developer Tools, git, Sourcetree, github, TFS, NPM
							</TableData>
						</tr>
						<tr>
							<TableData>Infrastructure</TableData>
							<TableData>
							Windows Server, IIS, AWS S3 Buckets, AWS Cloudfront, AWS lambda
						functions, IaC (Terraform, AWS CLI), AzureDevOps
							</TableData>
						</tr>
						<tr>
							<TableData>CI/CD</TableData>
							<TableData>
							AzureDevops, Octopus, Jenkins, Powershell
							</TableData>
						</tr>
						<tr>
							<TableData>Other</TableData>
							<TableData>
							Windows Server, IIS, AWS S3 Buckets, AWS Cloudfront, AWS lambda
							Technical project management, Business and Architecture
						understanding, Scrum, Coordination, Team management
							</TableData>
						</tr>
					</tbody>
				</Table>
			</Row>
		</>
	)
}

export default Experience
