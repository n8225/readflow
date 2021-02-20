import { MockAuthService } from './MockAuthService'
import { OIDCAuthService } from './OIDCAuthService'

const { authority } = window['runConfig']

export interface User {
  expired?: boolean
  access_token: string | null
}

export interface AuthService {
  getUser: () => Promise<User | null>
  getAccountUrl: () => string
  login: () => Promise<any>
  renewToken: () => Promise<User>
  logout: () => Promise<any>
}

const service = authority === 'mock' ? new MockAuthService() : new OIDCAuthService()

export default service
