# Node.js TypeScript Hexagonal Architecture Template

This repository provides a template for setting up a Node.js project with TypeScript, following the Hexagonal Architecture (also known as Ports and Adapters) design pattern.

It features the following:

- A `fastify` server on an AWS lambdalith
- Unit testing with `jest`
- Integration testing with `testcontainers`
- Persistency with DynamoDB using `dynamodb-toolbox`
- Logging with `pino`
- `aws-cdk` for deploying the lambdalith to AWS
- GitHub actions workflow for CI/CD
- Add TS5.4 and import paths
