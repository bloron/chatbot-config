import convict from 'convict'
import dotenv from 'dotenv'
import isEmpty from 'lodash/fp'

// Load .env file in the root directory of the project
dotenv.config()

const config = convict({
  clientID: {
    doc: 'Client ID',
    format: '*',
    env: 'CLIENT_ID',
  },
  clientSecret: {
    doc: 'Client Secret',
    format: '*',
    env: 'CLIENT_SECRET',
  },
  accessToken: {
    doc: 'Access token',
    format: '*',
    env: 'ACCESS_TOKEN',
  },
  expiry: {
    doc: 'Access token expiry date',
    format: '*',
    env: 'EXPIRY_DATE',
    default: 14565,
  },
  refreshToken: {
    doc: 'refresh token',
    format: '*',
    env: 'REFRESH_TOKEN',
  },
  scopes: {
    doc: 'Scopes',
    format: '*',
    env: 'SCOPES',
    default: ['chat:edit', 'chat:read'],
  },
  token_type: {
    doc: 'Token type',
    format: '*',
    env: 'TOKEN_TYPE',
    default: 'bearer',
  },
})

export default (strict = true, ...configFilePath) => {
  const nodeEnv = config.get('env')

  const configPath = isEmpty(configFilePath) ? `./config/${nodeEnv}.json` : configFilePath

  config.loadFile(configPath)
  config.validate({strict})

  return config
}
