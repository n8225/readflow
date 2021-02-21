import { MockAuthService } from './MockAuthService'
import { OIDCAuthService } from './OIDCAuthService'

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

const service = window.runConfig.authority === 'mock' ? new MockAuthService() : new OIDCAuthService()

export default service
