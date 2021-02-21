/* eslint-disable @typescript-eslint/camelcase */
import { Log, UserManager } from 'oidc-client'

import { AuthService } from './'

export class OIDCAuthService implements AuthService {
  public userManager: UserManager

  constructor() {
    const redirect = encodeURIComponent(document.location.href)
    const settings = {
      authority: window.runConfig.authority,
      client_id: window.runConfig.clientID,
      redirect_uri: `${document.location.origin}/signin-callback.html?redirect=${redirect}`,
      silent_redirect_uri: `${document.location.origin}/silent-renew.html`,
      post_logout_redirect_uri: document.location.origin,
      response_type: 'id_token token',
      scope: 'openid profile email',
    }
    this.userManager = new UserManager(settings)

    Log.logger = console
    Log.level = Log.WARN
  }

  public getUser() {
    return this.userManager.getUser()
  }

  public getAccountUrl() {
    return `(
          window.runConfig.authority +
          '/account?referrer=' + 
          window.runConfig.clientID + 
          '&referrer_uri=' + 
          encodeURI(document.location.href)
          `
  }

  public login() {
    return this.userManager.signinRedirect()
  }

  public renewToken() {
    return this.userManager.signinSilent()
  }

  public logout() {
    return this.userManager.signoutRedirect()
  }
}
