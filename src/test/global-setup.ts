import { TestEnvironment } from './test-manager'

export const setup = async () => {
  await TestEnvironment().provisionDynamoDB()
  process.env.INTEGRATION_ENVIRONMENT_READY = 'true'
}

export default setup
