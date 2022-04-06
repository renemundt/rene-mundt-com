import * as React from 'react'
import { css } from '@emotion/react'

import { Col, Row } from './grid-system'
import { Heading3 } from './shared'

const thTdStyles = css`
  text-align: left;
  border: 1px solid;
  padding: 10px;
`

const TableHeader = ({ text }) => <th css={thTdStyles}>{text}</th>
const TableData = ({ text }) => <td css={thTdStyles}>{text}</td>

const Experience = () => {
  return (
    <>
      <Row>
        <Col size={1}>
          <Heading3>Experience</Heading3>
        </Col>
      </Row>
      <Row>
        <table
          css={css`
            width: 100%;
            border-collapse: collapse;
          `}
        >
          <thead>
            <tr>
              <TableHeader text={'Category'} />
              <TableHeader text={'Technology'} />
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData text={'Frontend/Web'} />
              <TableData
                text={
                  'ASP.NET MVC/WebForms, Angular2+, Reactjs, npm, Javascript, Typescript, Angularjs, Jest, Jasmine, Nightwatch, Cypress.io'
                }
              />
            </tr>
            <tr>
              <TableData text={'Backend'} />
              <TableData
                text={
                  'Nuget, WebApi, Console applications, WPF, Microsoft Forms, Unit test, SQL, SQL Server Management Studio, Nodejs, IoC, AWS DynamoDB, CosmosDb, Elastic Search (ELK), NHibernate, Design patterns'
                }
              />
            </tr>
            <tr>
              <TableData text={'Tools'} />
              <TableData
                text={
                  'Visual Studio, Visual Studio Code, Fiddler, Postman, Google Chrome Developer Tools, git, Sourcetree, github, TFS, NPM'
                }
              />
            </tr>
            <tr>
              <TableData text={'Infrastructure'} />
              <TableData
                text={'Windows Server, IIS, AWS S3 Buckets, AWS Cloudfront, AWS lambda functions, IaC (Terraform, AWS CLI), AzureDevOps'}
              />
            </tr>
            <tr>
              <TableData text={'CI/CD'} />
              <TableData text={'AzureDevops, Octopus, Jenkins, Powershell'} />
            </tr>
            <tr>
              <TableData text={'Other'} />
              <TableData
                text={
                  'Windows Server, IIS, AWS S3 Buckets, AWS Cloudfront, AWS lambda Technical project management, Business and Architecture understanding, Scrum, Coordination, Team management'
                }
              />
            </tr>
          </tbody>
        </table>
      </Row>
    </>
  )
}

export default Experience
